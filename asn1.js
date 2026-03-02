// ASN.1 JavaScript decoder
// Copyright (c) 2008 Lapo Luchini <lapo@lapo.it>

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

import { oids } from './oids.js';

const
    ellipsis = '\u2026',
    reTimeS =     /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,}))?)?)?(Z|(-(?:0\d|1[0-2])|[+](?:0\d|1[0-4]))([0-5]\d)?)?$/,
    reTimeL = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,}))?)?)?(Z|(-(?:0\d|1[0-2])|[+](?:0\d|1[0-4]))([0-5]\d)?)?$/,
    hexDigits = '0123456789ABCDEF',
    b64Std = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    b64URL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
    tableT61 = [
        ['', ''],
        ['AEIOUaeiou', 'ÀÈÌÒÙàèìòù'], // Grave
        ['ACEILNORSUYZacegilnorsuyz', 'ÁĆÉÍĹŃÓŔŚÚÝŹáćéģíĺńóŕśúýź'], // Acute
        ['ACEGHIJOSUWYaceghijosuwy', 'ÂĈÊĜĤÎĴÔŜÛŴŶâĉêĝĥîĵôŝûŵŷ'], // Circumflex
        ['AINOUainou', 'ÃĨÑÕŨãĩñõũ'], // Tilde
        ['AEIOUaeiou', 'ĀĒĪŌŪāēīōū'], // Macron
        ['AGUagu', 'ĂĞŬăğŭ'], // Breve
        ['CEGIZcegz', 'ĊĖĠİŻċėġż'], // Dot
        ['AEIOUYaeiouy', 'ÄËÏÖÜŸäëïöüÿ'], // Umlaut or diæresis
        ['', ''],
        ['AUau', 'ÅŮåů'], // Ring
        ['CGKLNRSTcklnrst', 'ÇĢĶĻŅŖŞŢçķļņŗşţ'], // Cedilla
        ['', ''],
        ['OUou', 'ŐŰőű'], // Double Acute
        ['AEIUaeiu', 'ĄĘĮŲąęįų'], // Ogonek
        ['CDELNRSTZcdelnrstz', 'ČĎĚĽŇŘŠŤŽčďěľňřšťž'], // Caron
    ];

/**
 * Truncates a string to a specified length and adds an ellipsis if needed.
 * @param {string} str - The input string to truncate
 * @param {number} len - The maximum length of the string
 * @returns {string} The truncated string
 */
function stringCut(str, len) {
    if (str.length > len)
        str = str.substring(0, len) + ellipsis;
    return str;
}

/**
 * Checks if a string contains only printable characters (ASCII 32-126, plus tab, newline, carriage return)
 * @param {string} s - The string to check
 * @throws {Error} If an unprintable character is found
 */
function checkPrintable(s) {
    let i, v;
    for (i = 0; i < s.length; ++i) {
        v = s.charCodeAt(i);
        if (v < 32 && v != 9 && v != 10 && v != 13) // [\t\r\n] are (kinda) printable
            throw new Error('Unprintable character at index ' + i + ' (code ' + s.str.charCodeAt(i) + ')');
    }
}

/**
 * Class to manage a stream of bytes, with a zero-copy approach.
 * It uses an existing array or binary string and advances a position index.
 */
export class Stream {

    /**
     * Creates a new Stream object.
     * @param {Stream|array|string} enc data (will not be copied)
     * @param {?number} pos starting position (mandatory when `end` is not a Stream)
     */
    constructor(enc, pos) {
        if (enc instanceof Stream) {
            this.enc = enc.enc;
            this.pos = enc.pos;
        } else {
            this.enc = enc;
            this.pos = pos;
        }
        if (typeof this.pos != 'number')
            throw new Error('"pos" must be a numeric value');
        // Set up the raw byte access function based on the type of data
        if (typeof this.enc == 'string')
            this.getRaw = pos => this.enc.charCodeAt(pos);
        else if (typeof this.enc[0] == 'number')
            this.getRaw = pos => this.enc[pos];
        else
            throw new Error('"enc" must be a numeric array or a string');
    }

    /**
     * Get the byte at current position (and increment it) or at a specified position (and avoid moving current position).
     * @param {?number} pos read position if specified, else current position (and increment it)
     * @returns {number} The byte value at the specified position
     */
    get(pos) {
        if (pos === undefined)
            pos = this.pos++;
        if (pos >= this.enc.length)
            throw new Error('Requesting byte offset ' + pos + ' on a stream of length ' + this.enc.length);
        return this.getRaw(pos);
    }

    /**
     * Convert a single byte to a hexadecimal string (of length 2).
     * @param {number} b - The byte to convert
     * @returns {string} Hexadecimal representation of the byte
     */
    static hexByte(b) {
        return hexDigits.charAt((b >> 4) & 0xF) + hexDigits.charAt(b & 0xF);
    }

    /**
     * Hexadecimal dump of a specified region of the stream.
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {string} type - 'raw', 'byte' or 'dump' (default)
     * @returns {string} Hexadecimal representation of the data
     */
    hexDump(start, end, type = 'dump') {
        let s = '';
        for (let i = start; i < end; ++i) {
            if (type == 'byte' && i > start)
                s += ' ';
            s += Stream.hexByte(this.get(i));
            if (type == 'dump')
                switch (i & 0xF) {
                case 0x7: s += '  '; break;
                case 0xF: s += '\n'; break;
                default:  s += ' ';
                }
        }
        return s;
    }

    /**
     * Base64url dump of a specified region of the stream (according to RFC 4648 section 5).
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {string} type - 'url' (default, section 5 without padding) or 'std' (section 4 with padding)
     * @returns {string} Base64 encoded representation of the data
     */
    b64Dump(start, end, type = 'url') {
        const b64 = type === 'url' ? b64URL : b64Std,
            extra = (end - start) % 3;
        let s = '',
            i, c;
        for (i = start; i + 2 < end; i += 3) {
            c = this.get(i) << 16 | this.get(i + 1) << 8 | this.get(i + 2);
            s += b64.charAt(c >> 18 & 0x3F);
            s += b64.charAt(c >> 12 & 0x3F);
            s += b64.charAt(c >>  6 & 0x3F);
            s += b64.charAt(c       & 0x3F);
        }
        if (extra > 0) {
            c = this.get(i) << 16;
            if (extra > 1) c |= this.get(i + 1) << 8;
            s += b64.charAt(c >> 18 & 0x3F);
            s += b64.charAt(c >> 12 & 0x3F);
            if (extra == 2) s += b64.charAt(c >> 6 & 0x3F);
            if (b64 === b64Std) s += '==='.slice(0, 3 - extra);
        }
        return s;
    }

    /**
     * Check if a region of the stream contains only ASCII characters (32-176)
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @returns {boolean} True if all characters are ASCII, false otherwise
     */
    isASCII(start, end) {
        for (let i = start; i < end; ++i) {
            let c = this.get(i);
            if (c < 32 || c > 176)
                return false;
        }
        return true;
    }

    /**
     * Parse a region of the stream as an ISO string
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {number} maxLength - maximum length of the output string
     * @returns {Object} Object with size and str properties
     */
    parseStringISO(start, end, maxLength) {
        let s = '';
        for (let i = start; i < end; ++i)
            s += String.fromCharCode(this.get(i));
        return { size: s.length, str: stringCut(s, maxLength) };
    }

    /**
     * Parse a region of the stream as a T.61 string
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {number} maxLength - maximum length of the output string
     * @returns {Object} Object with size and str properties
     */
    parseStringT61(start, end, maxLength) {
        // warning: this code is not very well tested so far
        function merge(c, d) {
            const t = tableT61[c - 0xC0];
            const i = t[0].indexOf(String.fromCharCode(d));
            return (i < 0) ? '\0' : t[1].charAt(i);
        }
        let s = '', c;
        for (let i = start; i < end; ++i) {
            c = this.get(i);
            if (c >= 0xA4 && c <= 0xBF)
                s += '$¥#§¤\0\0«\0\0\0\0°±²³×µ¶·÷\0\0»¼½¾¿'.charAt(c - 0xA4);
            else if (c >= 0xE0 && c <= 0xFF)
                s += 'ΩÆÐªĦ\0ĲĿŁØŒºÞŦŊŉĸæđðħıĳŀłøœßþŧŋ\0'.charAt(c - 0xE0);
            else if (c >= 0xC0 && c <= 0xCF)
                s += merge(c, this.get(++i));
            else // using ISO 8859-1 for characters undefined (or equal) in T.61
                s += String.fromCharCode(c);
        }
        return { size: s.length, str: stringCut(s, maxLength) };
    }

    /**
     * Parse a region of the stream as a UTF-8 string
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {number} maxLength - maximum length of the output string
     * @returns {Object} Object with size and str properties
     */
    parseStringUTF(start, end, maxLength) {
        /**
         * Helper function to process UTF-8 continuation bytes
         * @param {number} c - The continuation byte
         * @returns {number} The extracted data bits
         */
        function ex(c) { // must be 10xxxxxx
            if ((c < 0x80) || (c >= 0xC0))
                throw new Error('Invalid UTF-8 continuation byte: ' + c);
            return (c & 0x3F);
        }
        /**
         * Helper function to convert a code point to a surrogate pair
         * @param {number} cp - The code point to convert
         * @returns {string} The surrogate pair as a string
         */
        function surrogate(cp) {
            if (cp < 0x10000)
                throw new Error('UTF-8 overlong encoding, codepoint encoded in 4 bytes: ' + cp);
            // we could use String.fromCodePoint(cp) but let's be nice to older browsers and use surrogate pairs
            cp -= 0x10000;
            return String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);
        }
        let s = '';
        for (let i = start; i < end; ) {
            const c = this.get(i++);
            if (c < 0x80) // 0xxxxxxx (7 bit)
                s += String.fromCharCode(c);
            else if (c < 0xC0)
                throw new Error('Invalid UTF-8 starting byte: ' + c);
            else if (c < 0xE0) // 110xxxxx 10xxxxxx (11 bit)
                s += String.fromCharCode(((c & 0x1F) << 6) | ex(this.get(i++)));
            else if (c < 0xF0) // 1110xxxx 10xxxxxx 10xxxxxx (16 bit)
                s += String.fromCharCode(((c & 0x0F) << 12) | (ex(this.get(i++)) << 6) | ex(this.get(i++)));
            else if (c < 0xF8) // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx (21 bit)
                s += surrogate(((c & 0x07) << 18) | (ex(this.get(i++)) << 12) | (ex(this.get(i++)) << 6) | ex(this.get(i++)));
            else
                throw new Error('Invalid UTF-8 starting byte (since 2003 it is restricted to 4 bytes): ' + c);
        }
        return { size: s.length, str: stringCut(s, maxLength) };
    }

    /**
     * Parse a region of the stream as a BMP (Basic Multilingual Plane) string
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {number} maxLength - maximum length of the output string
     * @returns {Object} Object with size and str properties
     */
    parseStringBMP(start, end, maxLength) {
        let s = '', hi, lo;
        for (let i = start; i < end; ) {
            hi = this.get(i++);
            lo = this.get(i++);
            s += String.fromCharCode((hi << 8) | lo);
        }
        return { size: s.length, str: stringCut(s, maxLength) };
    }

    /**
     * Parse a region of the stream as a time string
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {boolean} shortYear - Whether to parse as short year (2-digit)
     * @returns {string} Formatted time string
     */
    parseTime(start, end, shortYear) {
        let s = this.parseStringISO(start, end).str,
            m = (shortYear ? reTimeS : reTimeL).exec(s);
        if (!m)
            throw new Error('Unrecognized time: ' + s);
        if (shortYear) {
            // to avoid querying the timer, use the fixed range [1970, 2069]
            // it will conform with ITU X.400 [-10, +40] sliding window until 2030
            m[1] = +m[1];
            m[1] += (m[1] < 70) ? 2000 : 1900;
        }
        s = m[1] + '-' + m[2] + '-' + m[3] + ' ' + m[4];
        if (m[5]) {
            s += ':' + m[5];
            if (m[6]) {
                s += ':' + m[6];
                if (m[7])
                    s += '.' + m[7];
            }
        }
        if (m[8]) {
            s += ' UTC';
            if (m[9])
                s += m[9] + ':' + (m[10] || '00');
        }
        return s;
    }

    /**
     * Parse a region of the stream as an integer
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @returns {string} Formatted integer string
     */
    parseInteger(start, end) {
        let v = this.get(start),
            s = '';
        const neg = (v > 127),
            pad = neg ? 255 : 0;
        // skip unuseful bits (not allowed in DER)
        while (v == pad && ++start < end)
            v = this.get(start);
        const len = end - start;
        if (len === 0)
            return neg ? '-1' : '0';
        // show bit length of huge integers
        if (len > 4) {
            let v2 = v,
                lenBit = len << 3;
            while (((v2 ^ pad) & 0x80) == 0) {
                v2 <<= 1;
                --lenBit;
            }
            s = '(' + lenBit + ' bit)\n';
        }
        // decode the integer
        if (neg) v = v - 256;
        let n = BigInt(v);
        for (let i = start + 1; i < end; ++i)
            n = (n << 8n) | BigInt(this.get(i));
        return s + n;
    }

    /**
     * Parse a region of the stream as a bit string.
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {number} maxLength - maximum length of the output string
     * @returns {Object} Object with size and str properties
     */
    parseBitString(start, end, maxLength) {
        const unusedBits = this.get(start);
        if (unusedBits > 7)
            throw new Error('Invalid BitString with unusedBits=' + unusedBits);
        const lenBit = ((end - start - 1) << 3) - unusedBits;
        let s = '';
        for (let i = start + 1; i < end; ++i) {
            let b = this.get(i),
                skip = (i == end - 1) ? unusedBits : 0;
            for (let j = 7; j >= skip; --j)
                s += (b >> j) & 1 ? '1' : '0';
            if (s.length > maxLength)
                s = stringCut(s, maxLength);
        }
        return { size: lenBit, str: s };
    }

    /**
     * Parse a region of the stream as an octet string.
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {number} maxLength - maximum length of the output string
     * @returns {Object} Object with size and str properties
     */
    parseOctetString(start, end, maxLength) {
        try {
            let s = this.parseStringUTF(start, end, maxLength);
            checkPrintable(s.str);
            return { size: end - start, str: s.str };
        } catch (ignore) {
            // If UTF-8 parsing fails, fall back to hexadecimal dump
        }
        const len = end - start;
        maxLength /= 2; // we work in bytes
        if (len > maxLength)
            end = start + maxLength;
        let s = '';
        for (let i = start; i < end; ++i)
            s += Stream.hexByte(this.get(i));
        if (len > maxLength)
            s += ellipsis;
        return { size: len, str: s };
    }

    /**
     * Parse a region of the stream as an OID (Object Identifier).
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {number} maxLength - maximum length of the output string
     * @param {boolean} isRelative - Whether the OID is relative
     * @returns {string} Formatted OID string
     */
    parseOID(start, end, maxLength, isRelative) {
        let s = '',
            n = 0n,
            bits = 0;
        for (let i = start; i < end; ++i) {
            let v = this.get(i);
            // Shift bits and add the lower 7 bits of the byte
            n = (n << 7n) | BigInt(v & 0x7F);
            bits += 7;
            // If the most significant bit is 0, this is the last byte of the OID component
            if (!(v & 0x80)) { // finished
                // If this is the first component, handle it specially
                if (s === '') {
                    if (isRelative) {
                        s = n.toString();
                    } else {
                        let m = n < 80 ? n < 40 ? 0n : 1n : 2n;
                        s = m + '.' + (n - m * 40n);
                    }
                } else
                    s += '.' + n;
                if (s.length > maxLength)
                    return stringCut(s, maxLength);
                n = 0n;
                bits = 0;
            }
        }
        if (bits > 0)
            s += '.incomplete';
        // If OIDs mapping is available and the OID is absolute, try to resolve it
        if (typeof oids === 'object' && !isRelative) {
            let oid = oids[s];
            if (oid) {
                if (oid.d) s += '\n' + oid.d;
                if (oid.c) s += '\n' + oid.c;
                if (oid.w) s += '\n(warning!)';
            }
        }
        return s;
    }

    /**
     * Parse a region of the stream as a relative OID (Object Identifier).
     * @param {number} start - starting position (included)
     * @param {number} end - ending position (excluded)
     * @param {number} maxLength - maximum length of the output string
     * @returns {string} Formatted relative OID string
     */
    parseRelativeOID(start, end, maxLength) {
        return this.parseOID(start, end, maxLength, true);
    }
}

function recurse(el, parser, maxLength) {
    let avoidRecurse = true;
    if (el.tag.tagConstructed && el.sub) {
        avoidRecurse = false;
        el.sub.forEach(function (e1) {
            if (e1.tag.tagClass != el.tag.tagClass || e1.tag.tagNumber != el.tag.tagNumber)
                avoidRecurse = true;
        });
    }
    if (avoidRecurse)
        return el.stream[parser](el.posContent(), el.posContent() + Math.abs(el.length), maxLength);
    let d = { size: 0, str: '' };
    el.sub.forEach(function (el) {
        let d1 = recurse(el, parser, maxLength - d.str.length);
        d.size += d1.size;
        d.str += d1.str;
    });
    return d;
}

class ASN1Tag {
    constructor(stream) {
        let buf = stream.get();
        this.tagClass = buf >> 6;
        this.tagConstructed = ((buf & 0x20) !== 0);
        this.tagNumber = buf & 0x1F;
        if (this.tagNumber == 0x1F) { // long tag
            let n = 0n;
            do {
                buf = stream.get();
                n = (n << 7n) | BigInt(buf & 0x7F);
            } while (buf & 0x80);
            this.tagNumber = n <= Number.MAX_SAFE_INTEGER ? Number(n) : n;
        }
    }
    isUniversal() {
        return this.tagClass === 0x00;
    }
    isEOC() {
        return this.tagClass === 0x00 && this.tagNumber === 0x00;
    }
}

/**
 * ASN1 class for parsing ASN.1 encoded data.
 * Instances of this class represent an ASN.1 element and provides methods to parse and display its content.
 */
export class ASN1 {
    /**
     * Creates an ASN1 parser object.
     * @param {Stream} stream - The stream containing the ASN.1 data.
     * @param {number} header - The header length.
     * @param {number} length - The length of the data.
     * @param {ASN1Tag} tag - The ASN.1 tag.
     * @param {number} tagLen - The length of the tag.
     * @param {Array} sub - The sub-elements.
     */
    constructor(stream, header, length, tag, tagLen, sub) {
        if (!(tag instanceof ASN1Tag)) throw new Error('Invalid tag value.');
        this.stream = stream;
        this.header = header;
        this.length = length;
        this.tag = tag;
        this.tagLen = tagLen;
        this.sub = sub;
    }

    /**
     * Get the type name of the ASN.1 element.
     * @returns {string} The type name.
     */
    typeName() {
        switch (this.tag.tagClass) {
        case 0: // universal
            switch (this.tag.tagNumber) {
            case 0x00: return 'EOC';
            case 0x01: return 'BOOLEAN';
            case 0x02: return 'INTEGER';
            case 0x03: return 'BIT_STRING';
            case 0x04: return 'OCTET_STRING';
            case 0x05: return 'NULL';
            case 0x06: return 'OBJECT_IDENTIFIER';
            case 0x07: return 'ObjectDescriptor';
            case 0x08: return 'EXTERNAL';
            case 0x09: return 'REAL';
            case 0x0A: return 'ENUMERATED';
            case 0x0B: return 'EMBEDDED_PDV';
            case 0x0C: return 'UTF8String';
            case 0x0D: return 'RELATIVE_OID';
            case 0x10: return 'SEQUENCE';
            case 0x11: return 'SET';
            case 0x12: return 'NumericString';
            case 0x13: return 'PrintableString'; // ASCII subset
            case 0x14: return 'TeletexString'; // aka T61String
            case 0x15: return 'VideotexString';
            case 0x16: return 'IA5String'; // ASCII
            case 0x17: return 'UTCTime';
            case 0x18: return 'GeneralizedTime';
            case 0x19: return 'GraphicString';
            case 0x1A: return 'VisibleString'; // ASCII subset
            case 0x1B: return 'GeneralString';
            case 0x1C: return 'UniversalString';
            case 0x1E: return 'BMPString';
            }
            return 'Universal_' + this.tag.tagNumber.toString();
        case 1: return 'Application_' + this.tag.tagNumber.toString();
        case 2: return '[' + this.tag.tagNumber.toString() + ']'; // Context
        case 3: return 'Private_' + this.tag.tagNumber.toString();
        }
    }

    /**
     * Get a string preview of the content (intended for humans).
     * @param {number} maxLength - The maximum length of the content.
     * @returns {string|null} The content preview or null if not supported.
     */
    content(maxLength) {
        if (this.tag === undefined)
            return null;
        if (maxLength === undefined)
            maxLength = Infinity;
        const content = this.posContent(),
            len = Math.abs(this.length);
        if (!this.tag.isUniversal()) {
            if (this.sub !== null)
                return '(' + this.sub.length + ' elem)';
            let d1 = this.stream.parseOctetString(content, content + len, maxLength);
            return '(' + d1.size + ' byte)\n' + d1.str;
        }
        switch (this.tag.tagNumber) {
        case 0x01: // BOOLEAN
            if (len != 1) return 'invalid length ' + len;
            return (this.stream.get(content) === 0) ? 'false' : 'true';
        case 0x02: // INTEGER
            if (len < 1) return 'invalid length ' + len;
            return this.stream.parseInteger(content, content + len);
        case 0x03: { // BIT_STRING
            let d = recurse(this, 'parseBitString', maxLength);
            return '(' + d.size + ' bit)\n' + d.str;
        }
        case 0x04: { // OCTET_STRING
            let d = recurse(this, 'parseOctetString', maxLength);
            return '(' + d.size + ' byte)\n' + d.str;
        }
        //case 0x05: // NULL
        case 0x06: // OBJECT_IDENTIFIER
            if (len < 1) return 'invalid length ' + len; // pgut001's dumpasn1.c enforces a minimum lenght of 3
            return this.stream.parseOID(content, content + len, maxLength);
        //case 0x07: // ObjectDescriptor
        //case 0x08: // EXTERNAL
        //case 0x09: // REAL
        case 0x0A: // ENUMERATED
            return this.stream.parseInteger(content, content + len);
        //case 0x0B: // EMBEDDED_PDV
        case 0x0D: // RELATIVE-OID
            return this.stream.parseRelativeOID(content, content + len, maxLength);
        case 0x10: // SEQUENCE
        case 0x11: // SET
            if (this.sub !== null)
                return '(' + this.sub.length + ' elem)';
            else
                return '(no elem)';
        case 0x0C: // UTF8String
            return recurse(this, 'parseStringUTF', maxLength).str;
        case 0x14: // TeletexString
            return recurse(this, 'parseStringT61', maxLength).str;
        case 0x12: // NumericString
        case 0x13: // PrintableString
        case 0x15: // VideotexString
        case 0x16: // IA5String
        case 0x1A: // VisibleString
        case 0x1B: // GeneralString
        //case 0x19: // GraphicString
        //case 0x1C: // UniversalString
            return recurse(this, 'parseStringISO', maxLength).str;
        case 0x1E: // BMPString
            return recurse(this, 'parseStringBMP', maxLength).str;
        case 0x17: // UTCTime
        case 0x18: // GeneralizedTime
            return this.stream.parseTime(content, content + len, (this.tag.tagNumber == 0x17));
        }
        return null;
    }

    /**
     * Get a string representation of the ASN.1 element.
     * @returns {string} The string representation.
     */
    toString() {
        return this.typeName() + '@' + this.stream.pos + '[header:' + this.header + ',length:' + this.length + ',sub:' + ((this.sub === null) ? 'null' : this.sub.length) + ']';
    }

    /**
     * Get a pretty string representation of the ASN.1 element.
     * @param {string} indent - The indentation string.
     * @returns {string} The pretty string representation.
     */
    toPrettyString(indent) {
        if (indent === undefined) indent = '';
        let s = indent;
        if (this.def) {
            if (this.def.id)
                s += this.def.id + ' ';
            if (this.def.name && this.def.name != this.typeName().replace(/_/g, ' '))
                s+= this.def.name + ' ';
            if (this.def.mismatch)
                s += '[?] ';
        }
        s += this.typeName() + ' @' + this.stream.pos;
        if (this.length >= 0)
            s += '+';
        s += this.length;
        if (this.tag.tagConstructed)
            s += ' (constructed)';
        else if ((this.tag.isUniversal() && ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) && (this.sub !== null))
            s += ' (encapsulates)';
        let content = this.content();
        if (content)
            s += ': ' + content.replace(/\n/g, '|');
        s += '\n';
        if (this.sub !== null) {
            indent += '  ';
            for (let i = 0, max = this.sub.length; i < max; ++i)
                s += this.sub[i].toPrettyString(indent);
        }
        return s;
    }

    /**
     * Get the starting position of the element in the stream.
     * @returns {number} The starting position.
     */
    posStart() {
        return this.stream.pos;
    }

    /**
     * Get the position of the content in the stream.
     * @returns {number} The content position.
     */
    posContent() {
        return this.stream.pos + this.header;
    }

    /**
     * Get the ending position of the element in the stream.
     * @returns {number} The ending position.
     */
    posEnd() {
        return this.stream.pos + this.header + Math.abs(this.length);
    }

    /**
     * Get the position of the length in the stream.
     * @returns {number} The length position.
     */
    posLen() {
        return this.stream.pos + this.tagLen;
    }

    /**
     * Get a hexadecimal dump of the node.
     * @param {string} [type='raw'] - The dump type: 'raw', 'byte', or 'dump'.
     * @returns {string} The hexadecimal dump.
     */
    toHexString(type = 'raw') {
        return this.stream.hexDump(this.posStart(), this.posEnd(), type);
    }

    /**
     * Get a base64url dump of the node (according to RFC 4648 section 5).
     * @param {string} [type='url'] - The dump type: 'url' (section 5 without padding) or 'std' (section 4 with padding).
     * @returns {string} The base64 encoded representation.
     */
    toB64String(type = 'url') {
        return this.stream.b64Dump(this.posStart(), this.posEnd(), type);
    }

    /**
     * Decode the length field of an ASN.1 element.
     * @param {Stream} stream - The stream to read from.
     * @returns {number|null} The decoded length, or null for indefinite length.
     * @throws {Error} If the length is invalid or exceeds 48 bits.
     */
    static decodeLength(stream) {
        const buf = stream.get(),
            len = buf & 0x7F;
        if (len == buf) // first bit was 0, short form
            return len;
        if (len === 0) // long form with length 0 is a special case
            return null; // undefined length
        if (len > 6) // no reason to use BigInt, as it would be a huge buffer anyways
            throw new Error('Length over 48 bits not supported at position ' + (stream.pos - 1));
        let value = 0;
        for (let i = 0; i < len; ++i)
            value = (value << 8) | stream.get();
        return value;
    }

    /**
     * Decode an ASN.1 element from a stream.
     * @param {Stream|array|string} stream - The input data.
     * @param {number} [offset=0] - The offset to start decoding from.
     * @param {Function} [type=ASN1] - The class to instantiate.
     * @returns {ASN1} The decoded ASN.1 element.
     * @throws {Error} If the decoding fails.
     */
    static decode(stream, offset, type = ASN1) {
        if (!(type == ASN1 || type.prototype instanceof ASN1))
            throw new Error('Must pass a class that extends ASN1');
        if (!(stream instanceof Stream))
            stream = new Stream(stream, offset || 0);
        let streamStart = new Stream(stream),
            tag = new ASN1Tag(stream),
            tagLen = stream.pos - streamStart.pos,
            len = ASN1.decodeLength(stream),
            start = stream.pos,
            header = start - streamStart.pos,
            sub = null,
            getSub = function () {
                sub = [];
                if (len !== null) {
                    // definite length
                    let end = start + len;
                    if (end > stream.enc.length)
                        throw new Error('Container at offset ' + start +  ' has a length of ' + len + ', which is past the end of the stream');
                    while (stream.pos < end)
                        sub[sub.length] = type.decode(stream);
                    if (stream.pos != end)
                        throw new Error('Content size is not correct for container at offset ' + start);
                } else {
                    // undefined length
                    try {
                        for (;;) {
                            let s = type.decode(stream);
                            if (s.tag.isEOC())
                                break;
                            sub[sub.length] = s;
                        }
                        len = start - stream.pos; // undefined lengths are represented as negative values
                    } catch (e) {
                        throw new Error('Exception while decoding undefined length content at offset ' + start + ': ' + e);
                    }
                }
            };
        if (tag.tagConstructed) {
            // must have valid content
            getSub();
        } else if (tag.isUniversal() && ((tag.tagNumber == 0x03) || (tag.tagNumber == 0x04))) {
            // sometimes BitString and OctetString are used to encapsulate ASN.1
            try {
                if (tag.tagNumber == 0x03)
                    if (stream.get() != 0)
                        throw new Error('BIT STRINGs with unused bits cannot encapsulate.');
                getSub();
                for (let s of sub) {
                    if (s.tag.isEOC())
                        throw new Error('EOC is not supposed to be actual content.');
                    try {
                        s.content();
                    } catch (e) {
                        throw new Error('Unable to parse content: ' + e);
                    }
                }
            } catch (ignore) {
                // but silently ignore when they don't
                sub = null;
                //DEBUG console.log('Could not decode structure at ' + start + ':', e);
            }
        }
        if (sub === null) {
            if (len === null)
                throw new Error("We can't skip over an invalid tag with undefined length at offset " + start);
            stream.pos = start + Math.abs(len);
        }
        return new type(streamStart, header, len, tag, tagLen, sub);
    }

}

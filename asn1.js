// ASN.1 JavaScript decoder
// Copyright (c) 2008-2022 Lapo Luchini <lapo@lapo.it>

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

(typeof define != 'undefined' ? define : function (factory) { 'use strict';
    if (typeof module == 'object') module.exports = factory(function (name) { return require(name); });
    else window.asn1 = factory(function (name) { return window[name.substring(2)]; });
})(function (require) {
"use strict";

var Int10 = require('./int10'),
    oids = require('./oids'),
    ellipsis = "\u2026",
    reTimeS =     /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|(-(?:0\d|1[0-2])|[+](?:0\d|1[0-4]))([0-5]\d)?)?$/,
    reTimeL = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|(-(?:0\d|1[0-2])|[+](?:0\d|1[0-4]))([0-5]\d)?)?$/;

function stringCut(str, len) {
    if (str.length > len)
        str = str.substring(0, len) + ellipsis;
    return str;
}

function Stream(enc, pos) {
    if (enc instanceof Stream) {
        this.enc = enc.enc;
        this.pos = enc.pos;
    } else {
        // enc should be an array or a binary string
        this.enc = enc;
        this.pos = pos;
    }
}
Stream.prototype.get = function (pos) {
    if (pos === undefined)
        pos = this.pos++;
    if (pos >= this.enc.length)
        throw 'Requesting byte offset ' + pos + ' on a stream of length ' + this.enc.length;
    return (typeof this.enc == "string") ? this.enc.charCodeAt(pos) : this.enc[pos];
};
Stream.prototype.hexDigits = "0123456789ABCDEF";
Stream.prototype.hexByte = function (b) {
    return this.hexDigits.charAt((b >> 4) & 0xF) + this.hexDigits.charAt(b & 0xF);
};
Stream.prototype.hexDump = function (start, end, raw) {
    var s = "";
    for (var i = start; i < end; ++i) {
        s += this.hexByte(this.get(i));
        if (raw !== true)
            switch (i & 0xF) {
            case 0x7: s += "  "; break;
            case 0xF: s += "\n"; break;
            default:  s += " ";
            }
    }
    return s;
};
var b64Safe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
Stream.prototype.b64Dump = function (start, end) {
    var extra = (end - start) % 3,
        s = '',
        i, c;
    for (i = start; i + 2 < end; i += 3) {
        c = this.get(i) << 16 | this.get(i + 1) << 8 | this.get(i + 2);
        s += b64Safe.charAt(c >> 18 & 0x3F);
        s += b64Safe.charAt(c >> 12 & 0x3F);
        s += b64Safe.charAt(c >>  6 & 0x3F);
        s += b64Safe.charAt(c       & 0x3F);
    }
    if (extra > 0) {
        c = this.get(i) << 16;
        if (extra > 1) c |= this.get(i + 1) << 8;
        s += b64Safe.charAt(c >> 18 & 0x3F);
        s += b64Safe.charAt(c >> 12 & 0x3F);
        if (extra == 2) s += b64Safe.charAt(c >> 6 & 0x3F);
    }
    return s;
};
Stream.prototype.isASCII = function (start, end) {
    for (var i = start; i < end; ++i) {
        var c = this.get(i);
        if (c < 32 || c > 176)
            return false;
    }
    return true;
};
Stream.prototype.parseStringISO = function (start, end, maxLength) {
    var s = "";
    for (var i = start; i < end; ++i)
        s += String.fromCharCode(this.get(i));
    return { size: s.length, str: stringCut(s, maxLength) };
};
var tableT61 = [
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
    ['CDELNRSTZcdelnrstz', 'ČĎĚĽŇŘŠŤŽčďěľňřšťž'] // Caron
];
Stream.prototype.parseStringT61 = function (start, end, maxLength) {
    // warning: this code is not very well tested so far
    function merge(c, d) {
        var t = tableT61[c - 0xC0];
        var i = t[0].indexOf(String.fromCharCode(d));
        return (i < 0) ? '\0' : t[1].charAt(i);
    }
    var s = "", c;
    for (var i = start; i < end; ++i) {
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
};
Stream.prototype.parseStringUTF = function (start, end, maxLength) {
    function ex(c) { // must be 10xxxxxx
        if ((c < 0x80) || (c >= 0xC0))
            throw new Error('Invalid UTF-8 continuation byte: ' + c);
        return (c & 0x3F);
    }
    function surrogate(cp) {
        if (cp < 0x10000)
            throw new Error('UTF-8 overlong encoding, codepoint encoded in 4 bytes: ' + cp);
        // we could use String.fromCodePoint(cp) but let's be nice to older browsers and use surrogate pairs
        cp -= 0x10000;
        return String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);
    }
    var s = "";
    for (var i = start; i < end; ) {
        var c = this.get(i++);
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
};
Stream.prototype.parseStringBMP = function (start, end, maxLength) {
    var s = "", hi, lo;
    for (var i = start; i < end; ) {
        hi = this.get(i++);
        lo = this.get(i++);
        s += String.fromCharCode((hi << 8) | lo);
    }
    return { size: s.length, str: stringCut(s, maxLength) };
};
Stream.prototype.parseTime = function (start, end, shortYear) {
    var s = this.parseStringISO(start, end).str,
        m = (shortYear ? reTimeS : reTimeL).exec(s);
    if (!m)
        return "Unrecognized time: " + s;
    if (shortYear) {
        // to avoid querying the timer, use the fixed range [1970, 2069]
        // it will conform with ITU X.400 [-10, +40] sliding window until 2030
        m[1] = +m[1];
        m[1] += (m[1] < 70) ? 2000 : 1900;
    }
    s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];
    if (m[5]) {
        s += ":" + m[5];
        if (m[6]) {
            s += ":" + m[6];
            if (m[7])
                s += "." + m[7];
        }
    }
    if (m[8]) {
        s += " UTC";
        if (m[9])
            s += m[9] + ":" + (m[10] || "00");
    }
    return s;
};
Stream.prototype.parseInteger = function (start, end) {
    var v = this.get(start),
        neg = (v > 127),
        pad = neg ? 255 : 0,
        len,
        s = '';
    // skip unuseful bits (not allowed in DER)
    while (v == pad && ++start < end)
        v = this.get(start);
    len = end - start;
    if (len === 0)
        return neg ? '-1' : '0';
    // show bit length of huge integers
    if (len > 4) {
        s = v;
        len <<= 3;
        while (((s ^ pad) & 0x80) == 0) {
            s <<= 1;
            --len;
        }
        s = "(" + len + " bit)\n";
    }
    // decode the integer
    if (neg) v = v - 256;
    var n = new Int10(v);
    for (var i = start + 1; i < end; ++i)
        n.mulAdd(256, this.get(i));
    return s + n.toString();
};
Stream.prototype.parseBitString = function (start, end, maxLength) {
    var unusedBits = this.get(start);
    if (unusedBits > 7)
        throw 'Invalid BitString with unusedBits=' + unusedBits;
    var lenBit = ((end - start - 1) << 3) - unusedBits,
        s = "";
    for (var i = start + 1; i < end; ++i) {
        var b = this.get(i),
            skip = (i == end - 1) ? unusedBits : 0;
        for (var j = 7; j >= skip; --j)
            s += (b >> j) & 1 ? "1" : "0";
        if (s.length > maxLength)
            s = stringCut(s, maxLength);
    }
    return { size: lenBit, str: s };
};
function checkPrintable(s) {
    var i, v;
    for (i = 0; i < s.length; ++i) {
        v = s.charCodeAt(i);
        if (v < 32 && v != 9 && v != 10 && v != 13) // [\t\r\n] are (kinda) printable
            throw new Error('Unprintable character at index ' + i + ' (code ' + s.str.charCodeAt(i) + ")");
    }
}
Stream.prototype.parseOctetString = function (start, end, maxLength) {
    var len = end - start,
        s;
    try {
        s = this.parseStringUTF(start, end, maxLength);
        checkPrintable(s.str);
        return { size: end - start, str: s.str };
    } catch (e) {
        // ignore
    }
    maxLength /= 2; // we work in bytes
    if (len > maxLength)
        end = start + maxLength;
    s = '';
    for (var i = start; i < end; ++i)
        s += this.hexByte(this.get(i));
    if (len > maxLength)
        s += ellipsis;
    return { size: len, str: s };
};
Stream.prototype.parseOID = function (start, end, maxLength, isRelative) {
    var s = '',
        n = new Int10(),
        bits = 0;
    for (var i = start; i < end; ++i) {
        var v = this.get(i);
        n.mulAdd(128, v & 0x7F);
        bits += 7;
        if (!(v & 0x80)) { // finished
            if (s === '') {
                n = n.simplify();
                if (isRelative) {
                    s = (n instanceof Int10) ? n.toString() : "" + n;
                } else if (n instanceof Int10) {
                    n.sub(80);
                    s = "2." + n.toString();
                } else {
                    var m = n < 80 ? n < 40 ? 0 : 1 : 2;
                    s = m + "." + (n - m * 40);
                }
            } else
                s += "." + n.toString();
            if (s.length > maxLength)
                return stringCut(s, maxLength);
            n = new Int10();
            bits = 0;
        }
    }
    if (bits > 0)
        s += ".incomplete";
    if (typeof oids === 'object' && !isRelative) {
        var oid = oids[s];
        if (oid) {
            if (oid.d) s += "\n" + oid.d;
            if (oid.c) s += "\n" + oid.c;
            if (oid.w) s += "\n(warning!)";
        }
    }
    return s;
};
Stream.prototype.parseRelativeOID = function (start, end, maxLength) {
    return this.parseOID(start, end, maxLength, true);
};

function ASN1(stream, header, length, tag, tagLen, sub) {
    if (!(tag instanceof ASN1Tag)) throw 'Invalid tag value.';
    this.stream = stream;
    this.header = header;
    this.length = length;
    this.tag = tag;
    this.tagLen = tagLen;
    this.sub = sub;
}
ASN1.prototype.typeName = function () {
    switch (this.tag.tagClass) {
    case 0: // universal
        switch (this.tag.tagNumber) {
        case 0x00: return "EOC";
        case 0x01: return "BOOLEAN";
        case 0x02: return "INTEGER";
        case 0x03: return "BIT_STRING";
        case 0x04: return "OCTET_STRING";
        case 0x05: return "NULL";
        case 0x06: return "OBJECT_IDENTIFIER";
        case 0x07: return "ObjectDescriptor";
        case 0x08: return "EXTERNAL";
        case 0x09: return "REAL";
        case 0x0A: return "ENUMERATED";
        case 0x0B: return "EMBEDDED_PDV";
        case 0x0C: return "UTF8String";
        case 0x0D: return "RELATIVE_OID";
        case 0x10: return "SEQUENCE";
        case 0x11: return "SET";
        case 0x12: return "NumericString";
        case 0x13: return "PrintableString"; // ASCII subset
        case 0x14: return "TeletexString"; // aka T61String
        case 0x15: return "VideotexString";
        case 0x16: return "IA5String"; // ASCII
        case 0x17: return "UTCTime";
        case 0x18: return "GeneralizedTime";
        case 0x19: return "GraphicString";
        case 0x1A: return "VisibleString"; // ASCII subset
        case 0x1B: return "GeneralString";
        case 0x1C: return "UniversalString";
        case 0x1E: return "BMPString";
        }
        return "Universal_" + this.tag.tagNumber.toString();
    case 1: return "Application_" + this.tag.tagNumber.toString();
    case 2: return "[" + this.tag.tagNumber.toString() + "]"; // Context
    case 3: return "Private_" + this.tag.tagNumber.toString();
    }
};
function recurse(el, parser, maxLength) {
    var avoidRecurse = true;
    if (el.tag.tagConstructed && el.sub) {
        avoidRecurse = false;
        el.sub.forEach(function (e1) {
            if (e1.tag.tagClass != el.tag.tagClass || e1.tag.tagNumber != el.tag.tagNumber)
                avoidRecurse = true;
        });
    }
    if (avoidRecurse)
        return el.stream[parser](el.posContent(), el.posContent() + Math.abs(el.length), maxLength);
    var d = { size: 0, str: '' };
    el.sub.forEach(function (el) {
        var d1 = recurse(el, parser, maxLength - d.str.length);
        d.size += d1.size;
        d.str += d1.str;
    });
    return d;
}
/** A string preview of the content (intended for humans). */
ASN1.prototype.content = function (maxLength) {
    if (this.tag === undefined)
        return null;
    if (maxLength === undefined)
        maxLength = Infinity;
    var content = this.posContent(),
        len = Math.abs(this.length);
    if (!this.tag.isUniversal()) {
        if (this.sub !== null)
            return "(" + this.sub.length + " elem)";
        var d1 = this.stream.parseOctetString(content, content + len, maxLength);
        return "(" + d1.size + " byte)\n" + d1.str;
    }
    switch (this.tag.tagNumber) {
    case 0x01: // BOOLEAN
        return (this.stream.get(content) === 0) ? "false" : "true";
    case 0x02: // INTEGER
        return this.stream.parseInteger(content, content + len);
    case 0x03: // BIT_STRING
        var d = recurse(this, 'parseBitString', maxLength);
        return "(" + d.size + " bit)\n" + d.str;
    case 0x04: // OCTET_STRING
        d = recurse(this, 'parseOctetString', maxLength);
        return "(" + d.size + " byte)\n" + d.str;
    //case 0x05: // NULL
    case 0x06: // OBJECT_IDENTIFIER
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
            return "(" + this.sub.length + " elem)";
        else
            return "(no elem)";
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
};
ASN1.prototype.toString = function () {
    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + ((this.sub === null) ? 'null' : this.sub.length) + "]";
};
ASN1.prototype.toPrettyString = function (indent) {
    if (indent === undefined) indent = '';
    var s = indent + this.typeName() + " @" + this.stream.pos;
    if (this.length >= 0)
        s += "+";
    s += this.length;
    if (this.tag.tagConstructed)
        s += " (constructed)";
    else if ((this.tag.isUniversal() && ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) && (this.sub !== null))
        s += " (encapsulates)";
    var content = this.content();
    if (content)
        s += ": " + content.replace(/\n/g, '|');
    s += "\n";
    if (this.sub !== null) {
        indent += '  ';
        for (var i = 0, max = this.sub.length; i < max; ++i)
            s += this.sub[i].toPrettyString(indent);
    }
    return s;
};
ASN1.prototype.posStart = function () {
    return this.stream.pos;
};
ASN1.prototype.posContent = function () {
    return this.stream.pos + this.header;
};
ASN1.prototype.posEnd = function () {
    return this.stream.pos + this.header + Math.abs(this.length);
};
/** Position of the length. */
ASN1.prototype.posLen = function() {
    return this.stream.pos + this.tagLen;
};
ASN1.prototype.toHexString = function () {
    return this.stream.hexDump(this.posStart(), this.posEnd(), true);
};
ASN1.prototype.toB64String = function () {
    return this.stream.b64Dump(this.posStart(), this.posEnd());
};
ASN1.decodeLength = function (stream) {
    var buf = stream.get(),
        len = buf & 0x7F;
    if (len == buf) // first bit was 0, short form
        return len;
    if (len === 0) // long form with length 0 is a special case
        return null; // undefined length
    if (len > 6) // no reason to use Int10, as it would be a huge buffer anyways
        throw "Length over 48 bits not supported at position " + (stream.pos - 1);
    buf = 0;
    for (var i = 0; i < len; ++i)
        buf = (buf * 256) + stream.get();
    return buf;
};
function ASN1Tag(stream) {
    var buf = stream.get();
    this.tagClass = buf >> 6;
    this.tagConstructed = ((buf & 0x20) !== 0);
    this.tagNumber = buf & 0x1F;
    if (this.tagNumber == 0x1F) { // long tag
        var n = new Int10();
        do {
            buf = stream.get();
            n.mulAdd(128, buf & 0x7F);
        } while (buf & 0x80);
        this.tagNumber = n.simplify();
        if (this.tagNumber < 0x1F) {
            throw 'Tag number ' + this.tagNumber + ' is smaller than 31, so it shall not use multi octet tag format';
        }
    }
}
ASN1Tag.prototype.isUniversal = function () {
    return this.tagClass === 0x00;
};
ASN1Tag.prototype.isEOC = function () {
    return this.tagClass === 0x00 && this.tagNumber === 0x00;
};
ASN1.decode = function (stream, offset) {
    if (!(stream instanceof Stream))
        stream = new Stream(stream, offset || 0);
    var streamStart = new Stream(stream),
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
                var end = start + len;
                if (end > stream.enc.length)
                    throw 'Container at offset ' + start +  ' has a length of ' + len + ', which is past the end of the stream';
                while (stream.pos < end)
                    sub[sub.length] = ASN1.decode(stream);
                if (stream.pos != end)
                    throw 'Content size is not correct for container at offset ' + start;
            } else {
                // undefined length
                try {
                    for (;;) {
                        var s = ASN1.decode(stream);
                        if (s.tag.isEOC())
                            break;
                        sub[sub.length] = s;
                    }
                    len = start - stream.pos; // undefined lengths are represented as negative values
                } catch (e) {
                    throw 'Exception while decoding undefined length content at offset ' + start + ': ' + e;
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
                    throw "BIT STRINGs with unused bits cannot encapsulate.";
            getSub();
            for (var i = 0; i < sub.length; ++i)
                if (sub[i].tag.isEOC())
                    throw 'EOC is not supposed to be actual content.';
        } catch (e) {
            // but silently ignore when they don't
            sub = null;
            //DEBUG console.log('Could not decode structure at ' + start + ':', e);
        }
    }
    if (sub === null) {
        if (len === null)
            throw "We can't skip over an invalid tag with undefined length at offset " + start;
        stream.pos = start + Math.abs(len);
    }
    return new ASN1(streamStart, header, len, tag, tagLen, sub);
};

return ASN1;

});

#! /usr/bin/env node

import * as fs from 'node:fs';

const
    patches = { // to fix some known RFCs' ASN.1 syntax errors
        0: [
            [ /\n\n[A-Z].*\n\f\n[A-Z].*\n\n/g, '' ], // page change
        ],
        2459: [ // currently unsupported
            [ 'videotex (8) } (0..ub-integer-options)', 'videotex (8) }' ],
            [ /OBJECT IDENTIFIER \( id-qt-cps \| id-qt-unotice \)/g, 'OBJECT IDENTIFIER' ],
            [ /SIGNED \{ (SEQUENCE \{[^}]+\})\s*\}/g, 'SEQUENCE { toBeSigned $1, algorithm AlgorithmIdentifier, signature BIT STRING }' ],
            [ /EXTENSION\.&[^,]+/g, 'OBJECT IDENTIFIER'],
        ],
        2986: [ // currently unsupported
            [ /FROM (InformationFramework|AuthenticationFramework) [a-zA-Z]+/g, 'FROM $1 {joint-iso-itu-t(2) ds(5) module(1) usefulDefinitions(0) 3}' ],
            [ /[(]v1,[^)]+[)]/g, '' ],
            [ /[{][{][^}]+[}][}]/g, '' ],
            [ 'SubjectPublicKeyInfo {ALGORITHM: IOSet}', 'SubjectPublicKeyInfo' ],
            [ /PKInfoAlgorithms ALGORITHM ::=[^}]+[}]/g, '' ],
            [ /(Attributes?) [{] ATTRIBUTE:IOSet [}]/g, '$1' ],
            [ /CRIAttributes +ATTRIBUTE +::=[^}]+[}]/g, '' ],
            [ /[A-Z]+[.]&id[(][{]IOSet[}][)]/g, 'OBJECT IDENTIFIER' ],
            [ /[A-Z]+[.]&Type[(][{]IOSet[}][{]@[a-z]+[}][)]/g, 'ANY' ],
            [ /(AlgorithmIdentifier) [{]ALGORITHM:IOSet [}]/g, '$1' ],
            [ /SignatureAlgorithms ALGORITHM ::=[^}]+[}]/g, '' ],
        ],
        3161: [ // actual syntax errors
            [ /--.*}/g, '}' ],
            [ /^( +)--.*\n(?:\1 .*\n)+/mg, '' ],
            [ /addInfoNotAvailable \(17\)/g, '$&,' ],
        ],
        5208: [ // currently unsupported
            [ 'FROM InformationFramework informationFramework', 'FROM InformationFramework {joint-iso-itu-t(2) ds(5) module(1) usefulDefinitions(0) 3}' ],
            [ ' {{PrivateKeyAlgorithms}}', '' ],
            [ 'Version ::= INTEGER {v1(0)} (v1,...)', 'Version ::= INTEGER {v1(0)}' ],
            [ ' {{KeyEncryptionAlgorithms}}', '' ],
            [ /\.\.\. -- For local profiles/g, '' ],
        ],
        5280: [ // currently unsupported
            [ 'videotex     (8) } (0..ub-integer-options)', 'videotex     (8) }' ],
            [ /OBJECT IDENTIFIER \( id-qt-cps \| id-qt-unotice \)/g, 'OBJECT IDENTIFIER' ],
        ],
        4210: [
            [ /^\s+-- .*\r?\n/mg, '' ], // comments
        ],
        8017: [ // this RFC uses a lot of currently unsupported syntax
            [ /ALGORITHM-IDENTIFIER ::= CLASS[^-]+--/, '--' ],
            [ /\n +\S+ +ALGORITHM-IDENTIFIER[^\n]+(\n {6}[^\n]+)+\n {3}[}]/g, '' ],
            [ /AlgorithmIdentifier [{] ALGORITHM-IDENTIFIER:InfoObjectSet [}] ::=(\n {6}[^\n]+)+\n {3}[}]/, 'AlgorithmIdentifier ::= ANY'],
            [ /algorithm +id-[^,\n]+,/g, 'algorithm ANY,' ],
            [ / (sha1 {4}HashAlgorithm|mgf1SHA1 {4}MaskGenAlgorithm|pSpecifiedEmpty {4}PSourceAlgorithm|rSAES-OAEP-Default-Identifier {4}RSAES-AlgorithmIdentifier|rSASSA-PSS-Default-Identifier {4}RSASSA-AlgorithmIdentifier) ::= [{](\n( {6}[^\n]+)?)+\n {3}[}]/g, '' ],
            [ / ::= AlgorithmIdentifier [{]\s+[{][^}]+[}]\s+[}]/g, ' ::= AlgorithmIdentifier' ],
            [ /OCTET STRING[(]SIZE[(]0..MAX[)][)]/g, 'OCTET STRING' ],
            [ /emptyString {4}EncodingParameters ::= ''H/g, '' ],
            [ /[(]CONSTRAINED BY[^)]+[)]/g, '' ],
        ],
    };

// const reWhitespace = /(?:\s|--(?:[}-]?[^\n}-])*(?:\n|--))*/y;
const reWhitespace = /(?:\s|--(?:-?[^\n-])*(?:\n|--))*/my;
const reIdentifier = /[a-zA-Z](?:[-]?[a-zA-Z0-9])*/y;
const reNumber = /0|[1-9][0-9]*/y;
const reToken = /[(){},[\];]|::=|OPTIONAL|DEFAULT|NULL|TRUE|FALSE|\.\.|OF|SIZE|MIN|MAX|DEFINED BY|DEFINITIONS|TAGS|BEGIN|EXPORTS|IMPORTS|FROM|END/y;
const reType = /ANY|NULL|BOOLEAN|INTEGER|(?:BIT|OCTET)\s+STRING|OBJECT\s+IDENTIFIER|SEQUENCE|SET|CHOICE|ENUMERATED|(?:Generalized|UTC)Time|(?:BMP|General|Graphic|IA5|ISO64|Numeric|Printable|Teletex|T61|Universal|UTF8|Videotex|Visible)String/y;
const reTagClass = /UNIVERSAL|APPLICATION|PRIVATE|/y;
const reTagType = /IMPLICIT|EXPLICIT|/y;
const reTagDefault = /(AUTOMATIC|IMPLICIT|EXPLICIT) TAGS|/y;

let asn1;
let currentMod;

function searchImportedValue(id) {
    for (let imp of Object.values(currentMod.imports))
        for (let name of imp.types)
            if (name == id) {
                if (!(imp.oid in asn1))
                    throw new Error('Cannot find module: ' + imp.oid + ' ' + id);
                if (id in asn1[imp.oid].values)
                    return asn1[imp.oid].values[id];
                throw new Error('Cannot find imported value: ' + imp.oid + ' ' + id);
            }
    throw new Error('Cannot find imported value in any module: ' + id);
}

class Parser {
    constructor(enc, pos) {
        this.enc = enc;
        this.pos = pos;
        this.start = pos;
    }
    getChar(pos) {
        if (pos === undefined)
            pos = this.pos++;
        if (pos >= this.enc.length)
            throw 'Requesting byte offset ' + pos + ' on a stream of length ' + this.enc.length;
        return this.enc.charAt(pos);
    }
    exception(s) {
        const pos = this.pos;
        let from = Math.max(pos - 30, this.start);
        let to   = Math.min(pos + 30, this.enc.length);
        let ctx  = '';
        let arrow = '';
        let i = from;
        for (; i < pos; ++i) {
            ctx += this.getChar(i);
            arrow += ' ';
        }
        ctx += this.getChar(i++);
        arrow += '^';
        for (; i < to; ++i)
            ctx += this.getChar(i);
        // calculate line/column
        let line = 1;
        let lastLF = 0;
        for (let i = 0; i < pos; ++i)
            if (this.enc.charAt(i) == '\n') {
                ++line;
                lastLF = i;
            }
        let column = pos - lastLF;
        throw new Error('[position ' + pos + ', line ' + line + ':' + column + '] ' + s + '\n' + ctx.replace(/\s/g, ' ') + '\n' + arrow);
    }
    peek() {
        return this.enc.charCodeAt(this.pos);
    }
    peekChar() {
        return this.enc.charAt(this.pos);
    }
    isWhitespace() {
        let c = this.peekChar();
        return c == ' ' || c == '\n';
    }
    isDigit() {
        let c = this.peekChar();
        return c >= '0' && c <= '9';
    }
    skipWhitespace() {
        reWhitespace.lastIndex = this.pos;
        let s = reWhitespace.exec(this.enc);
        if (s)
            this.pos = reWhitespace.lastIndex;
    }
    // DefStream.prototype.eat = function (str) {
    //     for (let i = 0; i < str.length; ++i) {
    //         let c = this.getChar();
    //         if (c != str.charAt(i))
    //             throw new Error("Found '" + c + "', was expecting '" + str.charAt(i) + "'");
    //     }
    // };
    getRegEx(type, re) {
        this.skipWhitespace();
        re.lastIndex = this.pos;
        let s = re.exec(this.enc); //TODO: does not work with typed arrays
        if (!s)
            this.exception("Found '" + this.peekChar() + "', was expecting a " + type);
        s = s[0];
        // console.log('[debug] getRexEx@' + this.pos + ' = ' + s);
        this.pos = re.lastIndex;
        this.skipWhitespace();
        return s;
    }
    parseIdentifier() {
        let id = this.getRegEx('identifier', reIdentifier);
        // console.log('[debug] parseIdentifier = ' + id);
        return id;
    }
    parseNumber() {
        let id = this.getRegEx('number', reNumber);
        // console.log('[debug] parseNumber = ' + id);
        return id;
    }
    parseToken() {
        let tok = this.getRegEx('token', reToken);
        return tok;
    }
    tryToken(expect) {
        let p = this.pos;
        let t;
        try { t = this.parseToken(); } catch (e) { /*ignore*/ }
        // console.log('[debug] tryToken(' + expect + ') = ' + t);
        if (t == expect)
            return true;
        else {
            this.pos = p;
            return false;
        }
    }
    expectToken(expect) {
        let p = this.pos;
        let t;
        try { t = this.parseToken(); }
        catch (e) { console.log('[debug] expectToken', e); }
        // console.log('[debug] expectToken(' + expect + ') = ' + t);
        if (t != expect) {
            this.pos = p;
            this.exception("Found '" + t + "', was expecting '" + expect + "'");
        }
    }
    parseNumberOrValue() {
        if (this.isDigit())
            return +this.parseNumber();
        return this.parseIdentifier();
    }
    parseRange() {
        let min = this.tryToken('MIN') ? 'MIN' : this.parseNumberOrValue();
        if (this.tryToken('..')) {
            let max = this.tryToken('MAX') ? 'MAX' : this.parseNumberOrValue();
            return [min, max];
        }
        return min;
    }
    parseBuiltinType() {
        let x = {
            name: this.getRegEx('type', reType),
            type: 'builtin',
        };
        // console.log('[debug] parseType = ' + x.name);
        try {
            switch (x.name) {
            case 'ANY':
                if (this.tryToken('DEFINED BY'))
                    x.definedBy = this.parseIdentifier();
                break;
            case 'NULL':
            case 'BOOLEAN':
            case 'OCTET STRING':
            case 'OBJECT IDENTIFIER':
                break;
            case 'CHOICE':
                x.content = this.parseElementTypeList();
                break;
            case 'SEQUENCE':
            case 'SET':
                if (this.peekChar() == '{') {
                    x.content = this.parseElementTypeList();
                } else {
                    x.typeOf = 1;
                    if (this.tryToken('SIZE')) {
                        this.expectToken('(');
                        x.size = this.parseRange();
                        this.expectToken(')');
                    }
                    this.expectToken('OF');
                    x.content = [this.parseType()];
                }
                break;
            case 'INTEGER':
                if (this.tryToken('(')) {
                    x.range = this.parseRange();
                    this.expectToken(')');
                }
                // falls through
            case 'ENUMERATED':
            case 'BIT STRING':
                if (this.tryToken('{')) {
                    x.content = {};
                    do {
                        let id = this.parseIdentifier();
                        this.expectToken('(');
                        let val = this.parseNumber(); //TODO: signed
                        this.expectToken(')');
                        x.content[id] = +val;
                    } while (this.tryToken(','));
                    this.expectToken('}');
                }
                break;
            case 'BMPString':
            case 'GeneralString':
            case 'GraphicString':
            case 'IA5String':
            case 'ISO646String':
            case 'NumericString':
            case 'PrintableString':
            case 'TeletexString':
            case 'T61String':
            case 'UniversalString':
            case 'UTF8String':
            case 'VideotexString':
            case 'VisibleString':
                if (this.tryToken('(')) {
                    if (this.tryToken('SIZE')) {
                        this.expectToken('(');
                        x.size = this.parseRange();
                        this.expectToken(')');
                    }
                    this.expectToken(')');
                }
                break;
            case 'UTCTime':
            case 'GeneralizedTime':
                break;
            default:
                x.warning = 'type unknown';
            }
        } catch (e) {
            console.log('[debug] parseBuiltinType content', e);
            x.warning = 'type exception';
        }
        return x;
    }
    parseTaggedType() {
        this.expectToken('[');
        let tagClass = this.getRegEx('class', reTagClass) || 'CONTEXT'; //TODO: use module defaults
        let t = this.parseNumber();
        this.expectToken(']');
        let plicit = this.getRegEx('explicit/implicit', reTagType);
        if (plicit == '') plicit = currentMod.tagDefault;
        let x = this.parseType();
        return {
            name: '[' + t + ']',
            type: 'tag',
            'class': tagClass,
            explicit: (plicit == 'EXPLICIT'),
            content: [{ name: '', type: x }],
        };
    }
    parseType() {
        if (this.peekChar() == '[')
            return this.parseTaggedType();
        let p = this.pos;
        try {
            return this.parseBuiltinType();
        } catch (e) {
            // console.log('[debug] parseAssignment failed on parseType', e);
            this.pos = p;
            let x = {
                name: this.parseIdentifier(),
                type: 'defined',
            };
            // let from = searchImportedType(x.name);
            // if (from)
            //     x.module = from;
            return x;
            //TODO "restricted string type"
        }
    }
    parseValueBoolean() {
        let p = this.pos;
        let t = this.parseToken();
        if (t == 'TRUE')
            return true;
        if (t == 'FALSE')
            return false;
        this.pos = p;
        this.exception("Found '" + t + "', was expecting a boolean");
    }
    parseValueOID() {
        this.expectToken('{');
        let v = '';
        while (!this.tryToken('}')) {
            let p = this.pos;
            let val;
            if (this.isDigit())
                val = this.parseNumber();
            else {
                this.pos = p;
                let id = this.parseIdentifier();
                if (this.tryToken('(')) {
                    val = this.parseNumber();
                    this.expectToken(')');
                } else {
                    if (id in currentMod.values) // defined in local module
                        val = currentMod.values[id].value;
                    else try {
                        val = searchImportedValue(id);
                    } catch (e) {
                        this.exception(e.message);
                    }
                }
            }
            if (v.length) v += '.';
            v += val;
        }
        return v;
    }
    parseValue() {
        let c = this.peekChar();
        if (c == '{')
            return this.parseValueOID();
        if (c >= '0' && c <= '9')
            return +this.parseNumber();
        if (c == '-')
            return -this.parseNumber();
        let p = this.pos;
        try {
            switch (this.parseToken()) {
            case 'TRUE':
                return true;
            case 'FALSE':
                return false;
            case 'NULL':
                return null;
            }
        } catch (e) {
            this.pos = p;
        }
        p = this.pos;
        try {
            return this.parseIdentifier();
        } catch (e) {
            this.pos = p;
        }
        this.exception('Unknown value type.');
    }
    /*DefStream.prototype.parseValue = function (type) {
        console.log('[debug] parseValue type:', type);
        if (type.type == 'defined') {
            if (!(type.name in types))
                this.exception("Missing type: " + type.name);
            type = types[type.name];
        }
        switch (type.name) {
            case 'BOOLEAN':
                return this.parseValueBoolean();
            case 'OBJECT IDENTIFIER':
                return this.parseValueOID();
            default:
                console.log('[debug] parseValue unknown:', type);
                return 'TODO:value';
        }
    }*/
    parseElementType() {
        let x = Object.assign({ id: this.parseIdentifier() }, this.parseType());
        // console.log('[debug] parseElementType 1:', x);
        if (this.tryToken('OPTIONAL'))
            x.optional = true;
        if (this.tryToken('DEFAULT'))
            x.default = this.parseValue(x.type);
            // console.log('[debug] parseElementType 2:', x);
        return x;
    }
    parseElementTypeList() {
        let v = [];
        this.expectToken('{');
        do {
            v.push(this.parseElementType());
        } while (this.tryToken(','));
        this.expectToken('}');
        return v;
    }
    parseAssignment() {
        let name = this.parseIdentifier();
        if (this.tryToken('::=')) { // type assignment
            // console.log('type name', name);
            let type = this.parseType();
            currentMod.types[name] = { name, type };
            return currentMod.types[name];
        } else { // value assignment
            // console.log('value name', name);
            let type = this.parseType();
            // console.log('[debug] parseAssignment type:', type);
            this.expectToken('::=');
            let value = this.parseValue(type);
            currentMod.values[name] = { name, type, value };
            return currentMod.values[name];
        }
    }
    parseModuleIdentifier() {
        return {
            name: this.parseIdentifier(),
            oid: this.parseValueOID(),
        };
    }
    parseSymbolsImported() {
        let imports = {};
        do {
            let l = [];
            do {
                l.push(this.parseIdentifier());
            } while (this.tryToken(','));
            this.expectToken('FROM');
            let mod = this.parseModuleIdentifier();
            mod.types = l;
            imports[mod.oid] = mod;
        } while (this.peekChar() != ';');
        return imports;
    }
    parseModuleDefinition(file) {
        let mod = this.parseModuleIdentifier();
        currentMod = mod; // for deeply nested parsers
        mod.source = file;
        this.expectToken('DEFINITIONS');
        mod.tagDefault = this.getRegEx('tag default', reTagDefault).split(' ')[0];
        this.expectToken('::=');
        this.expectToken('BEGIN');
        //TODO this.tryToken('EXPORTS')
        if (this.tryToken('IMPORTS')) {
            mod.imports = this.parseSymbolsImported();
            this.expectToken(';');
        }
        mod.values = {};
        mod.types = {};
        while (!this.tryToken('END'))
            this.parseAssignment();
        return mod;
    }
}

let s = fs.readFileSync(process.argv[2], 'utf8');
let num = /^Request for Comments: ([0-9]+)/m.exec(s)[1];
console.log('RFC:', num);
for (let p of patches[0])
    s = s.replace(p[0], p[1]);
if (num in patches)
    for (let p of patches[num])
        s = s.replace(p[0], p[1]);
fs.writeFileSync(process.argv[2].replace(/[.]txt$/, '_patched.txt'), s, 'utf8');
// console.log(s);
asn1 = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const reModuleDefinition = /\s[A-Z](?:[-]?[a-zA-Z0-9])*\s*\{[^}]+\}\s*(^--.*|\n)*DEFINITIONS/gm;
let m;
while ((m = reModuleDefinition.exec(s))) {
    new Parser(s, m.index).parseModuleDefinition(process.argv[2]);
    console.log('Module:', currentMod.name);
    // fs.writeFileSync('rfc' + num + '.json', JSON.stringify(currentMod, null, 2) + '\n', 'utf8');
    asn1[currentMod.oid] = currentMod;
}
/*asn1 = Object.keys(asn1).sort().reduce(
    (obj, key) => { 
        obj[key] = asn1[key];
        return obj;
    }, 
    {}
);*/
fs.writeFileSync(process.argv[3], JSON.stringify(asn1, null, 2) + '\n', 'utf8');
// console.log('Module:', mod);
/*while ((idx = s.indexOf('::=', idx + 1)) >= 0) {
    let line = s.lastIndexOf('\n', idx) + 1;
    // console.log('[line] ' + s.slice(line, line+30));
    try {
        let a = new DefStream(s, line).parseAssignment();
        // console.log('[assignment]', util.inspect(a, {showHidden: false, depth: null, colors: true}));
    } catch (e) {
        console.log('Error:', e);
    }
}*/
console.log('Done.');

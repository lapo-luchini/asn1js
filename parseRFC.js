#! /usr/bin/env node
'use strict';

const
    fs = require('fs'),
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
        3161: [ // actual syntax errors
            [ /--.*}/g, '}' ],
            [ /^( +)--.*\n(?:\1 .*\n)+/mg, '' ],
            [ /addInfoNotAvailable \(17\)/g, '$&,' ],
        ],
        5280: [ // currently unsupported
            [ 'videotex     (8) } (0..ub-integer-options)', 'videotex     (8) }' ],
            [ /OBJECT IDENTIFIER \( id-qt-cps \| id-qt-unotice \)/g, 'OBJECT IDENTIFIER' ],
        ],
    };

let asn1;
let currentMod;

function Parser(enc, pos) {
    this.enc = enc;
    this.pos = pos;
    this.start = pos;
}
Parser.prototype.getChar = function (pos) {
    if (pos === undefined)
        pos = this.pos++;
    if (pos >= this.enc.length)
        throw 'Requesting byte offset ' + pos + ' on a stream of length ' + this.enc.length;
    return this.enc.charAt(pos);
};
Parser.prototype.exception = function (s, pos) {
    if (pos == undefined) pos = this.pos;
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
    throw new Error('[position ' + pos + '] ' + s + '\n' + ctx.replace(/\s/g, ' ') + '\n' + arrow);
};
Parser.prototype.peek = function () {
    return (typeof this.enc == 'string') ? this.enc.charCodeAt(this.pos) : this.enc[this.pos];
};
Parser.prototype.peekChar = function () {
    return (typeof this.enc == 'string') ? this.enc.charAt(this.pos) : String.fromCharCode(this.enc[this.pos]);
};
Parser.prototype.isWhitespace = function () {
    let c = this.peekChar();
    return c == ' ' || c == '\n';
};
Parser.prototype.isDigit = function () {
    let c = this.peekChar();
    return c >= '0' && c <= '9';
};
// const reWhitespace = /(?:\s|--(?:[}-]?[^\n}-])*(?:\n|--))*/y;
const reWhitespace = /(?:\s|--(?:-?[^\n-])*(?:\n|--))*/my;
Parser.prototype.skipWhitespace = function () {
    reWhitespace.lastIndex = this.pos;
    let s = reWhitespace.exec(this.enc);
    if (s)
        this.pos = reWhitespace.lastIndex;
};
// DefStream.prototype.eat = function (str) {
//     for (let i = 0; i < str.length; ++i) {
//         let c = this.getChar();
//         if (c != str.charAt(i))
//             throw new Error("Found '" + c + "', was expecting '" + str.charAt(i) + "'");
//     }
// };
Parser.prototype.getRegEx = function (type, re) {
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
};
const reIdentifier = /[a-zA-Z](?:[-]?[a-zA-Z0-9])*/y;
Parser.prototype.parseIdentifier = function () {
    let id = this.getRegEx('identifier', reIdentifier);
    // console.log('[debug] parseIdentifier = ' + id);
    return id;
};
const reNumber = /0|[1-9][0-9]*/y;
Parser.prototype.parseNumber = function () {
    let id = this.getRegEx('number', reNumber);
    // console.log('[debug] parseNumber = ' + id);
    return id;
};
const reToken = /[(){},[\];]|::=|OPTIONAL|DEFAULT|NULL|TRUE|FALSE|\.\.|OF|SIZE|MIN|MAX|DEFINED BY|DEFINITIONS|TAGS|BEGIN|EXPORTS|IMPORTS|FROM|END/y;
Parser.prototype.parseToken = function () {
    let tok = this.getRegEx('token', reToken);
    return tok;
};
Parser.prototype.tryToken = function (expect) {
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
};
Parser.prototype.expectToken = function (expect) {
    let p = this.pos;
    let t;
    try { t = this.parseToken(); }
    catch (e) { console.log('[debug] expectToken', e); }
    // console.log('[debug] expectToken(' + expect + ') = ' + t);
    if (t != expect) {
        this.pos = p;
        this.exception("Found '" + t + "', was expecting '" + expect + "'");
    }
};
Parser.prototype.parseNumberOrValue = function () {
    if (this.isDigit())
        return +this.parseNumber();
    return this.parseIdentifier();
};
Parser.prototype.parseRange = function () {
    let min = this.tryToken('MIN') ? 'MIN' : this.parseNumberOrValue();
    if (this.tryToken('..')) {
        let max = this.tryToken('MAX') ? 'MAX' : this.parseNumberOrValue();
        return [min, max];
    }
    return min;
};
const reType = /ANY|BOOLEAN|INTEGER|(?:BIT|OCTET)\s+STRING|OBJECT\s+IDENTIFIER|SEQUENCE|SET|CHOICE|ENUMERATED|(?:Generalized|UTC)Time|(?:BMP|General|Graphic|IA5|ISO64|Numeric|Printable|Teletex|T61|Universal|UTF8|Videotex|Visible)String/y;
Parser.prototype.parseBuiltinType = function () {
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
        default:
            x.content = 'TODO:unknown';
        }
    } catch (e) {
        console.log('[debug] parseBuiltinType content', e);
        x.content = 'TODO:exception';
    }
    return x;
};
const reTagClass = /UNIVERSAL|APPLICATION|PRIVATE|/y;
const reTagType = /IMPLICIT|EXPLICIT|/y;
Parser.prototype.parseTaggedType = function () {
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
};
Parser.prototype.parseType = function () {
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
};
Parser.prototype.parseValueBoolean = function () {
    let p = this.pos;
    let t = this.parseToken();
    if (t == 'TRUE')
        return true;
    if (t == 'FALSE')
        return false;
    this.pos = p;
    this.exception("Found '" + t + "', was expecting a boolean");
};
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
Parser.prototype.parseValueOID = function () {
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
                else
                    val = searchImportedValue(id);
            }
        }
        if (v.length) v += '.';
        v += val;
    }
    return v;
};
Parser.prototype.parseValue = function () {
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
};
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
};*/
Parser.prototype.parseElementType = function () {
    let x = Object.assign({ id: this.parseIdentifier() }, this.parseType());
    // console.log('[debug] parseElementType 1:', x);
    if (this.tryToken('OPTIONAL'))
        x.optional = true;
    if (this.tryToken('DEFAULT'))
        x.default = this.parseValue(x.type);
        // console.log('[debug] parseElementType 2:', x);
    return x;
};
Parser.prototype.parseElementTypeList = function () {
    let v = [];
    this.expectToken('{');
    do {
        v.push(this.parseElementType());
    } while (this.tryToken(','));
    this.expectToken('}');
    return v;
};
Parser.prototype.parseAssignment = function () {
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
};
Parser.prototype.parseModuleIdentifier = function () {
    return {
        name: this.parseIdentifier(),
        oid: this.parseValueOID(),
    };
};
Parser.prototype.parseSymbolsImported = function () {
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
};
const reTagDefault = /(AUTOMATIC|IMPLICIT|EXPLICIT) TAGS|/y;
Parser.prototype.parseModuleDefinition = function (file) {
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
};

let s = fs.readFileSync(process.argv[2], 'utf8');
let num = /^Request for Comments: ([0-9]+)/m.exec(s)[1];
console.log('RFC:', num);
for (let p of patches[0])
    s = s.replace(p[0], p[1]);
if (num in patches)
    for (let p of patches[num])
        s = s.replace(p[0], p[1]);
// fs.writeFileSync('rfc3161_patched.txt', s, 'utf8');
// console.log(s);
asn1 = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const reModuleDefinition = /\s[A-Z](?:[-]?[a-zA-Z0-9])*\s*\{[^}]+\}\s*DEFINITIONS/gm;
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

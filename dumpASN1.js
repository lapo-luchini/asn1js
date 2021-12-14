#!/usr/bin/env node
'use strict';

const
    fs = require('fs'),
    Base64 = require('./base64.js'),
    ASN1 = require('./asn1.js'),
    rfc = require('./rfcasn1.json'),
    colYellow = "\x1b[33m",
    colReset = "\x1b[0m";

function translate(def) {
    if (def?.type?.type)
        def = def.type;
    while (def?.type == 'defined') {
        const name = def.name;
        try {
            def = rfc['1.3.6.1.5.5.7.0.18'].types[name].type;
        } catch (e) {
            throw 'Type not found: ' + name;
        }
    }
    return def ?? {};
}

function print(value, def, indent) {
    if (indent === undefined) indent = '';
    // console.log(def);
    let deftype = translate(def);
    let tn = value.typeName();
    if (deftype.name == 'CHOICE') {
        for (let c of deftype.content) {
            c = translate(c);
            if (tn == c.name) {
                deftype = translate(c);
                break;
            }
        }
    }
    if (tn.replaceAll('_', ' ') != deftype.name && deftype.name != 'ANY')
        def = null;
    let name = '';
    if (def) {
        if (def.id) name += def.id;
        if (def.type == 'defined') name = (name ? name + ' ' : '') + def.name;
        if (name) name += ' ';
    }
    let s = indent + name + colYellow + value.typeName() + colReset + " @" + value.stream.pos;
    if (value.length >= 0)
        s += "+";
    s += value.length;
    if (value.tag.tagConstructed)
        s += " (constructed)";
    else if ((value.tag.isUniversal() && ((value.tag.tagNumber == 0x03) || (value.tag.tagNumber == 0x04))) && (value.sub !== null))
        s += " (encapsulates)";
    var content = value.content();
    if (content)
        s += ": " + content.replace(/\n/g, '|');
    s += "\n";
    if (value.sub !== null) {
        indent += '  ';
        for (var i = 0, max = value.sub.length; i < max; ++i)
            s += print(value.sub[i], deftype?.content?.[deftype?.typeOf ? 0 : i], indent);
    }
    return s;
}

let content = fs.readFileSync(process.argv[2]);
try { // try PEM first
    content = Base64.unarmor(content);
} catch (e) { // try DER/BER then
}
let result = ASN1.decode(content);
content = null;
console.log(print(result, rfc['1.3.6.1.5.5.7.0.18'].types.Certificate));

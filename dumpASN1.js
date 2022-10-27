#!/usr/bin/env node
'use strict';

const
    fs = require('fs'),
    Base64 = require('./base64.js'),
    ASN1 = require('./asn1.js'),
    rfc = require('./rfcasn1.json'),
    colYellow = "\x1b[33m",
    colBlue = "\x1b[34m",
    colReset = "\x1b[0m";

function searchType(name) {
    for (const r of Object.values(rfc))
        if (name in r.types) {
            // console.log(name + ' found in ' + r.name);
            return r.types[name];
        }
    throw 'Type not found: ' + name;
}

function translate(def) {
    if (def?.type?.type)
        def = def.type;
    while (def?.type == 'defined') {
        const name = def.name;
        def = searchType(name).type;
    }
    return def ?? {};
}

function print(value, def, stats, indent) {
    if (indent === undefined) indent = '';
    if (stats) {
        stats.total ??= 0;
        stats.recognized ??= 0;
    }
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
    if (stats) ++stats.total;
    let name = '';
    if (def) {
        if (stats) ++stats.recognized;
        if (def.id) name += colBlue + def.id + colReset;
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
    let content = value.content();
    if (content)
        s += ": " + content.replace(/\n/g, '|');
    s += "\n";
    if (value.sub !== null) {
        indent += '  ';
        let j = deftype?.content ? 0 : -1;
        for (let i = 0, max = value.sub.length; i < max; ++i) {
            const subval = value.sub[i];
            let type;
            if (j >= 0) {
                if (deftype?.typeOf)
                    type = deftype.content[0];
                else {
                    let tn = subval.typeName().replaceAll('_', ' ');
                    do {
                        type = deftype.content[j++];
                    } while (type && ('optional' in type || 'default' in type) && type.name != tn);
                }
            }
            s += print(subval, type, stats, indent);
        }
    }
    return s;
}

let content = fs.readFileSync(process.argv[3]);
try { // try PEM first
    content = Base64.unarmor(content);
} catch (e) { // try DER/BER then
}
let result = ASN1.decode(content);
content = null;
let stats = {};
console.log(print(result, searchType(process.argv[2]), stats));
console.log('Stats:', (stats.recognized * 100 / stats.total).toFixed(2) + '%');

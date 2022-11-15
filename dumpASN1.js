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

function translate(def, tn) {
    const id = def?.id;
    if (def?.type == 'tag' && !def.explicit)
        // def.type = def.content[0].type;
        def = def.content[0].type;
    while (def?.type == 'defined' || def?.type?.type == 'defined') {
        const name = def?.type?.type ? def.type.name : def.name;
        def = Object.assign({}, def);
        def.type = searchType(name).type;
    }
    if (def?.type?.name == 'CHOICE') {
        for (let c of def.type.content) {
            c = translate(c);
            if (tn == c.type.name || tn == c.name) {
                def = Object.assign({}, def);
                def.type = c.type.name ? c.type : c;
                break;
            }
        }
    }
    if (id)
        def = Object.assign({}, def, { id });
    return def ?? { type: {} };
}

function firstUpper(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function print(value, def, stats, indent) {
    if (indent === undefined) indent = '';
    stats ??= {};
    stats.total ??= 0;
    stats.recognized ??= 0;
    stats.defs ??= {};
    let tn = value.typeName();
    def = translate(def, tn);
    tn = tn.replaceAll('_', ' ');
    if (stats) ++stats.total;
    let name = '';
    if (def?.type) {
        if (def.id) name += colBlue + def.id + colReset;
        if (typeof def.type == 'object' && def.name) name = (name ? name + ' ' : '') + def.name;
        if (stats && name != '') ++stats.recognized;
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
        if (def?.type?.type)
            def = def.type;
        let j = def?.content ? 0 : -1;
        for (const subval of value.sub) {
            let type;
            if (j >= 0) {
                if (def.typeOf)
                    type = def.content[0];
                else {
                    let tn = subval.typeName(); //.replaceAll('_', ' ');
                    do {
                        type = def.content[j++];
                        // type = translate(type, tn);
                        if (type?.type?.type)
                            type = type.type;
                    } while (type && ('optional' in type || 'default' in type) && type.name != 'ANY' && type.name != tn);
                    if (type?.type == 'defined')
                        stats.defs[type.id] = subval.content().split(/\n/);
                    else if (type?.definedBy && stats.defs?.[type.definedBy]?.[1]) // hope current OIDs contain the type name (will need to parse from RFC itself)
                        type = searchType(firstUpper(stats.defs[type.definedBy][1]));
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
// console.log('Defs:', stats.defs);

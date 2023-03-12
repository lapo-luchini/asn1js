#!/usr/bin/env node
'use strict';

const
    fs = require('fs'),
    Base64 = require('./base64'),
    ASN1 = require('./asn1'),
    rfc = require('./rfcdef'),
    colYellow = '\x1b[33m',
    colBlue = '\x1b[34m',
    colReset = '\x1b[0m',
    commonTypes = [
        { description: 'X.509 certificate', ...moduleAndType(rfc['1.3.6.1.5.5.7.0.18'], 'Certificate') }, 
        { description: 'CMS / PKCS#7 envelope', ...moduleAndType(rfc['1.2.840.113549.1.9.16.0.14'], 'ContentInfo') },
    ];

function moduleAndType(mod, name) {
    return Object.assign({ module: { oid: mod.oid, name: mod.name, source: mod.source } }, mod.types[name]);
}

function searchType(name) {
    for (const mod of Object.values(rfc))
        if (name in mod.types) {
            // console.log(name + ' found in ' + r.name);
            // return r.types[name];
            return moduleAndType(mod, name);
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

function applyDef(value, def, stats = { total: 0, recognized: 0, defs: {} }) {
    value.def = {};
    let tn = value.typeName();
    def = translate(def, tn);
    ++stats.total;
    if (def?.type) {
        value.def = def;
        if (def.id || def.name) ++stats.recognized;
    }
    if (value.sub !== null) {
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
            applyDef(subval, type, stats);
        }
    }
    return stats;
}

function print(value, indent) {
    if (indent === undefined) indent = '';
    let tn = value.typeName();
    const def = value.def;
    tn = tn.replaceAll('_', ' ');
    let name = '';
    if (def?.type) {
        if (def.id) name += colBlue + def.id + colReset;
        if (typeof def.type == 'object' && def.name) name = (name ? name + ' ' : '') + def.name;
        if (name) name += ' ';
    }
    let s = indent + name + colYellow + value.typeName() + colReset + ' @' + value.stream.pos;
    if (value.length >= 0)
        s += '+';
    s += value.length;
    if (value.tag.tagConstructed)
        s += ' (constructed)';
    else if ((value.tag.isUniversal() && ((value.tag.tagNumber == 0x03) || (value.tag.tagNumber == 0x04))) && (value.sub !== null))
        s += ' (encapsulates)';
    let content = value.content();
    if (content)
        s += ': ' + content.replace(/\n/g, '|');
    s += '\n';
    if (value.sub !== null) {
        indent += '  ';
        for (const subval of value.sub)
            s += print(subval, indent);
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
const t0 = performance.now();
const types = commonTypes
    .map(type => {
        const stats = applyDef(result, type);
        return { type, match: stats.recognized / stats.total }
    })
    .sort((a, b) => b.match - a.match);
const t1 = performance.now();
console.log('Parsed in ' + (t1 - t0).toFixed(2) + ' ms; possible types:');
for (const t of types)
  console.log((t.match * 100).toFixed(2).padStart(6) + '% ' + t.type.description);
applyDef(result, types[0].match >= 0.1 ? types[0].type : null);
console.log('Parsed as:', result.def);
// const type = searchType(process.argv[2]);
// const stats = applyDef(result, type);
console.log(print(result));
// console.log('Stats:', (stats.recognized * 100 / stats.total).toFixed(2) + '%');
// // print(result, searchType(process.argv[2]), stats);
// // console.log('Defs:', stats.defs);

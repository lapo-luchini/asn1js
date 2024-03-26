#!/usr/bin/env node

import * as fs from 'node:fs';
import { Base64 } from './base64.js';
import { ASN1 } from './asn1.js';
import { Defs } from './defs.js';

const
    colYellow = '\x1b[33m',
    colBlue = '\x1b[34m',
    colReset = '\x1b[0m';

function print(value, indent) {
    if (indent === undefined) indent = '';
    const def = value.def;
    let name = '';
    if (def?.type) {
        if (def.id) name += colBlue + def.id + colReset;
        if (typeof def.type == 'object' && def.name) name = (name ? name + ' ' : '') + def.name;
        if (def.mismatch) name = (name ? name + ' ' : '') + '[?]';
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
const types = Defs.commonTypes
    .map(type => {
        const stats = Defs.match(result, type);
        return { type, match: stats.recognized / stats.total };
    })
    .sort((a, b) => b.match - a.match);
const t1 = performance.now();
console.log('Parsed in ' + (t1 - t0).toFixed(2) + ' ms; possible types:');
for (const t of types)
    console.log((t.match * 100).toFixed(2).padStart(6) + '% ' + t.type.description);
Defs.match(result, types[0].type);
// const stats = Defs.match(result, types[0].type);
// console.log('Stats:', stats);
console.log('Parsed as:', result.def);
// const type = searchType(process.argv[2]);
// const stats = applyDef(result, type);
console.log(print(result));
// console.log('Stats:', (stats.recognized * 100 / stats.total).toFixed(2) + '%');
// // print(result, searchType(process.argv[2]), stats);
// // console.log('Defs:', stats.defs);

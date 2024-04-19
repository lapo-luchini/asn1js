#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import { ASN1 } from './asn1.js';
import { Base64 } from './base64.js';
import { Defs } from './defs.js';

const tot = [];
for await (const file of await fs.opendir('examples')) {
    let content = await fs.readFile('examples/' + file.name);
    try {
        try { // try PEM first
            content = Base64.unarmor(content);
        } catch (e) { // try DER/BER then
        }
        let result = ASN1.decode(content);
        content = null;
        const types = Defs.commonTypes
            .map(type => {
                const stats = Defs.match(result, type);
                return { type, match: stats.recognized / stats.total };
            })
            .sort((a, b) => b.match - a.match);
        tot.push([ types[0].match, file.name, types[0].type.description ]);
    } catch (e) {
        tot.push([ 0, file.name, e.message ]);
    }
}
for (const f of tot)
    console.log(f[0].toFixed(3) + '\t' + f[1] + '\t' + f[2]);
const avg = tot.map(f => f[0]).reduce((sum, val) => sum + val) / tot.length;
console.log('\x1B[1m\x1B[32m' + (avg * 100).toFixed(3) + '\x1B[39m\x1B[22m%\tAVERAGE');

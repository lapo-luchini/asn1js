// ASN.1 RFC definitions matcher
// Copyright (c) 2023-2024 Lapo Luchini <lapo@lapo.it>

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

import { rfcdef } from './rfcdef.js';

function translate(def, tn, stats) {
    if (def?.type == 'tag' && !def.explicit)
        // def.type = def.content[0].type;
        def = def.content[0].type;
    if (def?.definedBy)
        try {
            // hope current OIDs contain the type name (will need to parse from RFC itself)
            def = Defs.searchType(firstUpper(stats.defs[def.definedBy][1]));
        } catch (e) { /*ignore*/ }
    while (def?.type == 'defined' || def?.type?.type == 'defined') {
        const name = def?.type?.type ? def.type.name : def.name;
        def = Object.assign({}, def);
        def.type = Defs.searchType(name).type;
    }
    if (def?.type?.name == 'CHOICE') {
        for (let c of def.type.content) {
            if (tn != c.type.name && tn != c.name)
                c = translate(c);
            if (tn == c.type.name || tn == c.name) {
                def = Object.assign({}, def);
                def.type = c.type.name ? c.type : c;
                break;
            }
        }
    }
    const id = def?.id;
    if (id)
        def = Object.assign({}, def, { id });
    return def ?? { type: {} };
}

function firstUpper(s) {
    return s[0].toUpperCase() + s.slice(1);
}

export class Defs {

    static moduleAndType(mod, name) {
        return Object.assign({ module: { oid: mod.oid, name: mod.name, source: mod.source } }, mod.types[name]);
    }

    static searchType(name) {
        for (const mod of Object.values(rfcdef))
            if (name in mod.types) {
                // console.log(name + ' found in ' + r.name);
                // return r.types[name];
                return Defs.moduleAndType(mod, name);
            }
        throw 'Type not found: ' + name;
    }

    static match(value, def, stats = { total: 0, recognized: 0, defs: {} }) {
        value.def = {};
        let tn = value.typeName().replaceAll('_', ' ');
        def = translate(def, tn, stats);
        ++stats.total;
        if (def?.type) {
            // if (def.id || def.name) ++stats.recognized;
            if (tn == def.type.name || tn == def.name || def.name == 'ANY')
                ++stats.recognized;
            else if (def.name)
                def = Object.assign({ mismatch: 1 }, def);
            value.def = def;
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
                        let tn = subval.typeName().replaceAll('_', ' ');
                        do {
                            type = def.content[j++];
                            // type = translate(type, tn);
                            if (type?.type?.type)
                                type = type.type;
                        } while (type && typeof type == 'object' && ('optional' in type || 'default' in type) && type.name != 'ANY' && type.name != tn);
                        if (type?.type == 'builtin' || type?.type == 'defined') {
                            let v = subval.content();
                            if (typeof v == 'string')
                                v = v.split(/\n/);
                            stats.defs[type.id] = v;
                        } else if (type?.definedBy && stats.defs?.[type.definedBy]?.[1]) { // hope current OIDs contain the type name (will need to parse from RFC itself)
                            try {
                                type = Defs.searchType(firstUpper(stats.defs[type.definedBy][1]));
                            } catch (e) { /*ignore*/ }
                        }
                    }
                }
                Defs.match(subval, type, stats);
            }
        }
        return stats;
    }

}

Defs.RFC = rfcdef;

Defs.commonTypes = [
    [ 'X.509 certificate', '1.3.6.1.5.5.7.0.18', 'Certificate' ], 
    [ 'X.509 public key info', '1.3.6.1.5.5.7.0.18', 'SubjectPublicKeyInfo' ],
    [ 'CMS / PKCS#7 envelope', '1.2.840.113549.1.9.16.0.14', 'ContentInfo' ],
    [ 'PKCS#1 RSA private key', '1.2.840.113549.1.1.0.1', 'RSAPrivateKey' ],
    [ 'PKCS#8 encrypted private key', '1.2.840.113549.1.8.1.1', 'EncryptedPrivateKeyInfo' ],
    [ 'PKCS#8 private key', '1.2.840.113549.1.8.1.1', 'PrivateKeyInfo' ],
    [ 'PKCS#10 certification request', '1.2.840.113549.1.10.1.1', 'CertificationRequest' ],
    [ 'CMP PKI Message', '1.3.6.1.5.5.7.0.16', 'PKIMessage' ],
].map(arr => ({ description: arr[0], ...Defs.moduleAndType(rfcdef[arr[1]], arr[2]) }));

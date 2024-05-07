asn1js
======

asn1js is a JavaScript generic ASN.1 parser/decoder that can decode any valid ASN.1 DER or BER structures.

An example page that can decode Base64-encoded (raw base64, PEM armoring and `begin-base64` are recognized) or Hex-encoded (or local files with some browsers) is included and can be used both [online on the official website](https://lapo.it/asn1js/) or [offline (ZIP file)](https://lapo.it/asn1js/asn1js.zip).

Usage with `nodejs`
-------------------

This package can be installed with either npm or yarn via the following commands:

```sh
npm install @lapo/asn1js
# or other tools
pnpm install @lapo/asn1js
yarn add @lapo/asn1js
```

You can import the classes like this:

```js
import { ASN1 } from '@lapo/asn1js';
```

A submodule of this package can also be imported:

```js
import { Hex } from '@lapo/asn1js/hex.js';
```

If your code is still not using ES6 Modules (and is using CommonJS) you can `require` it normally [since NodeJS 22](https://joyeecheung.github.io/blog/2024/03/18/require-esm-in-node-js/) (with parameter `--experimental-require-module`):

```js
const
  { ASN1 } = require('@lapo/asn1js'),
  { Hex } = require('@lapo/asn1js/hex.js');
console.log(ASN1.decode(Hex.decode('06032B6570')).content());
```

On older NodeJS you instead need to use async `import`:

```js
async function main() {
  const
    { ASN1 } = await import('@lapo/asn1js'),
    { Hex } = await import('@lapo/asn1js/hex.js');
  console.log(ASN1.decode(Hex.decode('06032B6570')).content());
}
main();
```

Usage on the web
--------------------

Can be [tested on JSFiddle](https://jsfiddle.net/lapo/y6t2wo7q/).

```html
<script>
import { ASN1 } from 'https://unpkg.com/@lapo/asn1js@2.0.0/asn1.js';
import { Hex } from 'https://unpkg.com/@lapo/asn1js@2.0.0/hex.js';

document.body.innerText = ASN1.decode(Hex.decode('06032B6570')).content();
</script>
```

Local usage
--------------------

Since unfortunately ESM modules are not working on `file:` protocol due to CORS issues, there is a bundled [single-file version working locally](https://asn1js.eu/index-local.html). It doesn't work online (due to CSP restrictions about inline content) but can be saved locally and opened in a browser. (known bug: dark mode is currently broken in this mode)

ISC license
-----------

ASN.1 JavaScript decoder Copyright (c) 2008-2024 Lapo Luchini <lapo@lapo.it>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

credits
-------

- OBJECT IDENTIFIER values are recognized using data taken from Peter Gutmann's [dumpasn1](https://www.cs.auckland.ac.nz/~pgut001/#standards) program.
- BMPString support added by [Felipe Gasper](https://github.com/FGasper)
- extended tag support added by [Péter Budai](https://www.peterbudai.eu/)
- patches by [Gergely Nagy](https://github.com/ngg)
- Relative OID support added by [Mistial Developer](https://github.com/mistial-dev)
- dark mode and other UI improvements by [Oliver Burgmaier](https://github.com/olibu/)
- patches by [Nicolai Søborg](https://github.com/NicolaiSoeborg)

links
-----

- [official website](https://lapo.it/asn1js/)
- [dedicated domain](https://asn1js.eu/)
- [InDefero tracker](http://idf.lapo.it/p/asn1js/)
- [GitHub mirror](https://github.com/lapo-luchini/asn1js)
- [Ohloh code stats](https://www.openhub.net/p/asn1js)

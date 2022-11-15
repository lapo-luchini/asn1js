asn1js
======

asn1js is a JavaScript generic ASN.1 parser/decoder that can decode any valid ASN.1 DER or BER structures.

An example page that can decode Base64-encoded (raw base64, PEM armoring and `begin-base64` are recognized) or Hex-encoded (or local files with some browsers) is included and can be used both [online on the official website](https://lapo.it/asn1js/) or [offline (ZIP file)](https://lapo.it/asn1js/asn1js.zip).

Usage with `npm` / `yarn`
-------------------------

This package can be installed with either npm or yarn via the following commands:

```sh
npm install @lapo/asn1js
# or with yarn
yarn add @lapo/asn1js
```

Assuming a standard javascript bundler is setup you can import it like so:

```js
const ASN1 = require('@lapo/asn1js');
// or with ES modules
import ASN1 from '@lapo/asn1js';
```

A submodule of this package can also be imported:

```js
const Hex = require('@lapo/asn1js/hex');
// or with ES modules
import Hex from '@lapo/asn1js/hex';
```

Usage with RequireJS
--------------------

Can be [tested on JSFiddle](https://jsfiddle.net/lapo/tmdq35ug/).

```html
<script type="text/javascript" src="https://unpkg.com/requirejs/require.js"></script>
<script>
require([
  'https://unpkg.com/@lapo/asn1js/asn1.js',
  'https://unpkg.com/@lapo/asn1js/hex.js'
], function(ASN1, Hex) {
  document.body.innerText = ASN1.decode(Hex.decode('06032B6570')).content();
});
</script>
```

ISC license
-----------

ASN.1 JavaScript decoder Copyright (c) 2008-2022 Lapo Luchini <lapo@lapo.it>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

credits
-------

- OBJECT IDENTIFIER values are recognized using data taken from Peter Gutmann's [dumpasn1](https://www.cs.auckland.ac.nz/~pgut001/#standards) program.
- BMPString support added by [Felipe Gasper](https://github.com/FGasper)
- extended tag support added by [Péter Budai](https://www.peterbudai.eu/)
- patches by [Gergely Nagy](https://github.com/ngg)
- Relative OID support added by [Mistial Developer](https://github.com/mistial-dev)

links
-----

- [official website](https://lapo.it/asn1js/)
- [InDefero tracker](http://idf.lapo.it/p/asn1js/)
- [GitHub mirror](https://github.com/lapo-luchini/asn1js)
- [Ohloh code stats](https://www.openhub.net/p/asn1js)

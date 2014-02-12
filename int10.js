// Big integer printing library
// Copyright (c) 2008-2014 Lapo Luchini <lapo@lapo.it>

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

/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
(function () {
"use strict";

var Int10 = {};

Int10.print = function (a) {
    var buf = [0],
        max = 10000000000000, // biggest integer that can still fit when multiplied by 256
        i, j, t, c, s;
    for (j = 0; j < a.length; ++j) {
        c = a[j];
        for (i = 0; i < buf.length; ++i) {
            t = buf[i] * 256 + c;
            if (t < max)
                c = 0;
            else {
                c = 0|(t / max);
                t -= c * max;
            }
            buf[i] = t;
        }
        if (c > 0)
            buf[i] = c;
    }
    s = buf[buf.length - 1].toString();
    for (i = buf.length - 2; i >= 0; --i)
        s += (max + buf[i]).toString().substring(1);
    return s;
};

// export globals
if (typeof module !== 'undefined') { module.exports = Int10; } else { window.Int10 = Int10; }
})();

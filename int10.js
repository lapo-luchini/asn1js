// Big integer base-10 printing library
// Copyright (c) 2008 Lapo Luchini <lapo@lapo.it>

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

/** Biggest 10^n integer that can still fit 2^53 when multiplied by 256. */
const max = 10000000000000;

export class Int10 {
    /**
     * Arbitrary length base-10 value.
     * @param {number} value - Optional initial value (will be 0 otherwise).
     */
    constructor(value) {
        this.buf = [+value || 0];
    }

    /**
     * Multiply value by m and add c.
     * @param {number} m - multiplier, must be 0<m<=256
     * @param {number} c - value to add, must be c>=0
     */
    mulAdd(m, c) {
        // assert(m > 0)
        // assert(m <= 256)
        // assert(c >= 0)
        let b = this.buf,
            l = b.length,
            i, t;
        for (i = 0; i < l; ++i) {
            t = b[i] * m + c;
            if (t < max)
                c = 0;
            else {
                c = 0|(t / max);
                t -= c * max;
            }
            b[i] = t;
        }
        if (c > 0)
            b[i] = c;
    }

    /**
     * Subtract value.
     * @param {number} c - value to subtract
     */
    sub(c) {
        let b = this.buf,
            l = b.length,
            i, t;
        for (i = 0; i < l; ++i) {
            t = b[i] - c;
            if (t < 0) {
                t += max;
                c = 1;
            } else
                c = 0;
            b[i] = t;
        }
        while (b[b.length - 1] === 0)
            b.pop();
    }

    /**
     * Convert to decimal string representation.
     * @param {number} [base=10] - optional value, only value accepted is 10
     * @returns {string} The decimal string representation.
     */
    toString(base = 10) {
        if (base != 10)
            throw new Error('only base 10 is supported');
        let b = this.buf,
            s = b[b.length - 1].toString();
        for (let i = b.length - 2; i >= 0; --i)
            s += (max + b[i]).toString().substring(1);
        return s;
    }

    /**
     * Convert to Number value representation.
     * Will probably overflow 2^53 and thus become approximate.
     * @returns {number} The numeric value.
     */
    valueOf() {
        let b = this.buf,
            v = 0;
        for (let i = b.length - 1; i >= 0; --i)
            v = v * max + b[i];
        return v;
    }

    /**
     * Return value as a simple Number (if it is <= 10000000000000), or return this.
     * @returns {number | Int10} The simplified value.
     */
    simplify() {
        let b = this.buf;
        return (b.length == 1) ? b[0] : this;
    }

}

// ASN.1 JavaScript decoder
// Copyright (c) 2008-2023 Lapo Luchini <lapo@lapo.it>

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

(typeof define != 'undefined' ? define : function (factory) { 'use strict';
    if (typeof module == 'object') module.exports = factory(function (name) { return require(name); });
    else window.dom = factory(function (name) { return window[name.substring(2)]; });
})(function (require) {
'use strict';

const
    ASN1 = require('./asn1'),
    oids = require('./oids'),
    lineLength = 80,
    contentLength = 8 * lineLength,
    DOM = {
        ellipsis: '\u2026',
        tag: function (tagName, className) {
            let t = document.createElement(tagName);
            t.className = className;
            return t;
        },
        text: function (str) {
            return document.createTextNode(str);
        },
        space: function () {
            let t = document.createElement('span');
            t.className = 'spaces';
            t.innerHTML = ' ';
            return t;
        },
        breakLines: function (str, length) {
            let lines = str.split(/\r?\n/),
                o = '';
            for (let i = 0; i < lines.length; ++i) {
                let line = lines[i];
                if (i > 0) o += '\n';
                while (line.length > length) {
                    o += line.substring(0, length);
                    o += '\n';
                    line = line.substring(length);
                }
                o += line;
            }
            return o;
        }
    }

class ASN1DOM extends ASN1 {

    toDOM(spaces) {
        spaces = spaces || '';
        let isOID = (typeof oids === 'object') && (this.tag.isUniversal() && (this.tag.tagNumber == 0x06) || (this.tag.tagNumber == 0x0D));
        let node = DOM.tag('div', 'node');
        node.asn1 = this;
        let head = DOM.tag('div', 'head');
        head.innerHTML = "<span class='spaces'>" + spaces + '</span>' + this.typeName().replace(/_/g, ' ');
        let content = this.content(contentLength);
        let oid;
        if (content !== null) {
            let preview = DOM.tag('span', 'preview'),
                shortContent;
            if (isOID)
                content = content.split('\n', 1)[0];
            shortContent = (content.length > lineLength) ? content.substring(0, lineLength) + DOM.ellipsis : content;
            preview.appendChild(DOM.space());
            preview.appendChild(DOM.text(shortContent));
            if (isOID) {
                oid = oids[content];
                if (oid) {
                    if (oid.d) {
                        preview.appendChild(DOM.space());
                        let oidd = DOM.tag('span', 'oid description');
                        oidd.appendChild(DOM.text(oid.d));
                        preview.appendChild(oidd);
                    }
                    if (oid.c) {
                        preview.appendChild(DOM.space());
                        let oidc = DOM.tag('span', 'oid comment');
                        oidc.appendChild(DOM.text('(' + oid.c + ')'));
                        preview.appendChild(oidc);
                    }
                }
            }
            head.appendChild(preview);
            content = DOM.breakLines(content, lineLength);
            content = content.replace(/</g, '&lt;');
            content = content.replace(/\n/g, '<br>');
        }
        node.appendChild(head);
        this.node = node;
        this.head = head;
        let value = DOM.tag('div', 'value');
        let s = 'Offset: ' + this.stream.pos + '<br>';
        s += 'Length: ' + this.header + '+';
        if (this.length >= 0)
            s += this.length;
        else
            s += (-this.length) + ' (undefined)';
        if (this.tag.tagConstructed)
            s += '<br>(constructed)';
        else if ((this.tag.isUniversal() && ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) && (this.sub !== null))
            s += '<br>(encapsulates)';
        //TODO if (this.tag.isUniversal() && this.tag.tagNumber == 0x03) s += "Unused bits: "
        if (content !== null) {
            s += '<br>Value:<br><b>' + content + '</b>';
            if (isOID && oid) {
                if (oid.d) s += '<br>' + oid.d;
                if (oid.c) s += '<br>' + oid.c;
                if (oid.w) s += '<br>(warning!)';
            }
        }
        value.innerHTML = s;
        node.appendChild(value);
        let sub = DOM.tag('div', 'sub');
        if (this.sub !== null) {
            spaces += '\xA0 ';
            for (let i = 0, max = this.sub.length; i < max; ++i)
                sub.appendChild(this.sub[i].toDOM(spaces));
        }
        node.appendChild(sub);
        head.onclick = function () {
            node.className = (node.className == 'node collapsed') ? 'node' : 'node collapsed';
        };
        return node;
    }
    fakeHover(current) {
        this.node.className += ' hover';
        if (current)
            this.head.className += ' hover';
    }
    fakeOut(current) {
        let re = / ?hover/;
        this.node.className = this.node.className.replace(re, '');
        if (current)
            this.head.className = this.head.className.replace(re, '');
    }
    toHexDOM_sub(node, className, stream, start, end) {
        if (start >= end)
            return;
        let sub = DOM.tag('span', className);
        sub.appendChild(DOM.text(
            stream.hexDump(start, end)));
        node.appendChild(sub);
    }
    toHexDOM(root) {
        let node = DOM.tag('span', 'hex');
        if (root === undefined) root = node;
        this.head.hexNode = node;
        this.head.onmouseover = function () { this.hexNode.className = 'hexCurrent'; };
        this.head.onmouseout  = function () { this.hexNode.className = 'hex'; };
        node.asn1 = this;
        node.onmouseover = function () {
            let current = !root.selected;
            if (current) {
                root.selected = this.asn1;
                this.className = 'hexCurrent';
            }
            this.asn1.fakeHover(current);
        };
        node.onmouseout  = function () {
            let current = (root.selected == this.asn1);
            this.asn1.fakeOut(current);
            if (current) {
                root.selected = null;
                this.className = 'hex';
            }
        };
        if (root == node) {
            let lineStart = this.posStart() & 0xF;
            if (lineStart != 0) {
                let skip = DOM.tag('span', 'skip');
                let skipStr = '';
                for (let j = lineStart; j > 0; --j)
                    skipStr += '   ';
                if (lineStart >= 8)
                    skipStr += ' ';
                skip.innerText = skipStr;
                node.appendChild(skip);
            }
        }
        this.toHexDOM_sub(node, 'tag', this.stream, this.posStart(), this.posLen());
        this.toHexDOM_sub(node, (this.length >= 0) ? 'dlen' : 'ulen', this.stream, this.posLen(), this.posContent());
        if (this.sub === null) {
            let start = this.posContent();
            let end = this.posEnd();
            if (end - start < 10 * 16)
                node.appendChild(DOM.text(
                    this.stream.hexDump(start, end)));
            else {
                let end1 = start + 5 * 16 - (start & 0xF);
                let start2 = end - 16 - (end & 0xF);
                node.appendChild(DOM.text(
                    this.stream.hexDump(start, end1)));
                let sub = DOM.tag('span', 'skip');
                sub.appendChild(DOM.text('\u2026 skipping ' + (start2 - end1) + ' bytes \u2026\n'));
                node.appendChild(sub);
                node.appendChild(DOM.text(
                    this.stream.hexDump(start2, end)));
            }
        } else if (this.sub.length > 0) {
            let first = this.sub[0];
            let last = this.sub[this.sub.length - 1];
            this.toHexDOM_sub(node, 'intro', this.stream, this.posContent(), first.posStart());
            for (let i = 0, max = this.sub.length; i < max; ++i)
                node.appendChild(this.sub[i].toHexDOM(root));
            this.toHexDOM_sub(node, 'outro', this.stream, last.posEnd(), this.posEnd());
        } else
            this.toHexDOM_sub(node, 'outro', this.stream, this.posContent(), this.posEnd());
        return node;
    }
    static decode(stream, offset) {
        return ASN1.decode(stream, offset, ASN1DOM);
    }

}

return ASN1DOM;

});

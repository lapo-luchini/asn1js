// ASN.1 JavaScript decoder
// Copyright (c) 2008-2018 Lapo Luchini <lapo@lapo.it>

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

(function (undefined) {
"use strict";

var ASN1 = (typeof module !== 'undefined') ? require('./asn1.js') : window.ASN1,
    oids = (typeof module !== 'undefined') ? require('./oids.js') : window.oids,
    lineLength = 80,
    contentLength = 8 * lineLength,
    DOM = {
        ellipsis: "\u2026",
        tag: function (tagName, className) {
            var t = document.createElement(tagName);
            t.className = className;
            return t;
        },
        text: function (str) {
            return document.createTextNode(str);
        },
        breakLines: function (str, length) {
            var lines = str.split(/\r?\n/),
                o = '';
            for (var i = 0; i < lines.length; ++i) {
                var line = lines[i];
                if (i > 0) o += "\n";
                while (line.length > length) {
                    o += line.substring(0, length);
                    o += "\n";
                    line = line.substring(length);
                }
                o += line;
            }
            return o;
        }
    };

ASN1.prototype.toDOM = function () {
    var isOID = (typeof oids === 'object') && (this.tag.isUniversal() && (this.tag.tagNumber == 0x06));
    var node = DOM.tag("div", "node");
    node.asn1 = this;
    var head = DOM.tag("div", "head");
    var s = this.typeName().replace(/_/g, " ");
    head.innerHTML = s;
    var content = this.content(contentLength);
    if (content !== null) {
        var preview = DOM.tag("span", "preview"),
            shortContent;
        content = String(content); // it might be a number
        if (isOID)
            content = content.split('\n', 1)[0];
        shortContent = (content.length > lineLength) ? content.substring(0, lineLength) + DOM.ellipsis : content;
        preview.appendChild(DOM.text(shortContent));
        if (isOID) {
            var oid = oids[content];
            if (oid) {
                if (oid.d) {
                    var oidd = DOM.tag("span", "oid description");
                    oidd.appendChild(DOM.text(oid.d));
                    preview.appendChild(oidd);
                }
                if (oid.c) {
                    var oidc = DOM.tag("span", "oid comment");
                    oidc.appendChild(DOM.text("(" + oid.c + ")"));
                    preview.appendChild(oidc);
                }
            }
        }
        head.appendChild(preview);
        content = DOM.breakLines(content, lineLength);
        content = content.replace(/</g, "&lt;");
        content = content.replace(/\n/g, "<br>");
    }
    node.appendChild(head);
    this.node = node;
    this.head = head;
    var value = DOM.tag("div", "value");
    s = "Offset: " + this.stream.pos + "<br>";
    s += "Length: " + this.header + "+";
    if (this.length >= 0)
        s += this.length;
    else
        s += (-this.length) + " (undefined)";
    if (this.tag.tagConstructed)
        s += "<br>(constructed)";
    else if ((this.tag.isUniversal() && ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) && (this.sub !== null))
        s += "<br>(encapsulates)";
    //TODO if (this.tag.isUniversal() && this.tag.tagNumber == 0x03) s += "Unused bits: "
    if (content !== null) {
        s += "<br>Value:<br><b>" + content + "</b>";
        if (isOID && oid) {
            if (oid.d) s += "<br>" + oid.d;
            if (oid.c) s += "<br>" + oid.c;
            if (oid.w) s += "<br>(warning!)";
        }
    }
    value.innerHTML = s;
    node.appendChild(value);
    var sub = DOM.tag("div", "sub");
    if (this.sub !== null) {
        for (var i = 0, max = this.sub.length; i < max; ++i)
            sub.appendChild(this.sub[i].toDOM());
    }
    node.appendChild(sub);
    head.onclick = function () {
        node.className = (node.className == "node collapsed") ? "node" : "node collapsed";
    };
    return node;
};
ASN1.prototype.fakeHover = function (current) {
    this.node.className += " hover";
    if (current)
        this.head.className += " hover";
};
ASN1.prototype.fakeOut = function (current) {
    var re = / ?hover/;
    this.node.className = this.node.className.replace(re, "");
    if (current)
        this.head.className = this.head.className.replace(re, "");
};
ASN1.prototype.toHexDOM_sub = function (node, className, stream, start, end) {
    if (start >= end)
        return;
    var sub = DOM.tag("span", className);
    sub.appendChild(DOM.text(
        stream.hexDump(start, end)));
    node.appendChild(sub);
};
ASN1.prototype.toHexDOM = function (root) {
    var node = DOM.tag("span", "hex");
    if (root === undefined) root = node;
    this.head.hexNode = node;
    this.head.onmouseover = function () { this.hexNode.className = "hexCurrent"; };
    this.head.onmouseout  = function () { this.hexNode.className = "hex"; };
    node.asn1 = this;
    node.onmouseover = function () {
        var current = !root.selected;
        if (current) {
            root.selected = this.asn1;
            this.className = "hexCurrent";
        }
        this.asn1.fakeHover(current);
    };
    node.onmouseout  = function () {
        var current = (root.selected == this.asn1);
        this.asn1.fakeOut(current);
        if (current) {
            root.selected = null;
            this.className = "hex";
        }
    };
    this.toHexDOM_sub(node, "tag", this.stream, this.posStart(), this.posStart() + 1);
    this.toHexDOM_sub(node, (this.length >= 0) ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent());
    if (this.sub === null) {
        var start = this.posContent();
        var end = this.posEnd();
        if (end - start < 10 * 16)
            node.appendChild(DOM.text(
                this.stream.hexDump(start, end)));
        else {
            var end1 = start + 5 * 16 - (start & 0xF);
            var start2 = end - 16 - (end & 0xF);
            node.appendChild(DOM.text(
                this.stream.hexDump(start, end1)));
            var sub = DOM.tag("span", "skip");
            sub.appendChild(DOM.text("\u2026 skipping " + (start2 - end1) + " bytes \u2026\n"));
            node.appendChild(sub);
            node.appendChild(DOM.text(
                this.stream.hexDump(start2, end)));
        }
    } else if (this.sub.length > 0) {
        var first = this.sub[0];
        var last = this.sub[this.sub.length - 1];
        this.toHexDOM_sub(node, "intro", this.stream, this.posContent(), first.posStart());
        for (var i = 0, max = this.sub.length; i < max; ++i)
            node.appendChild(this.sub[i].toHexDOM(root));
        this.toHexDOM_sub(node, "outro", this.stream, last.posEnd(), this.posEnd());
    } else
        this.toHexDOM_sub(node, "outro", this.stream, this.posContent(), this.posEnd());
    return node;
};

})();

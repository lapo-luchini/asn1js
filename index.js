/*jshint browser: true, strict: true, globalstrict: true, indent: 4, immed: true, latedef: true, undef: true, regexdash: false */
/*global Hex, Base64, ASN1 */
"use strict";

var reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
    hash = null;
function id(elem) {
    return document.getElementById(elem);
}
function toHTML(obj) {
    return String(obj).replace(/</g, "&lt;");
}
function decode(der) {
    var tree = id('tree');
    var dump = id('dump');
    tree.innerHTML = '';
    dump.innerHTML = '';
    try {
        var asn1 = ASN1.decode(der),
            hex = asn1.toHexString();
        tree.appendChild(asn1.toDOM());
        if (id('wantHex').checked)
            dump.appendChild(asn1.toHexDOM());
        if (id('pem').value === '') 
            id('pem').value = hex;
        // update URL hash (does this have length limits we should avoid?)
        hash = '#' + hex;
        window.location.hash = hash;
    } catch (e) {
        tree.innerHTML = toHTML(e);
    }
    return false;
}
function decodeArea() {
    try {
        var pem = id('pem').value;
        var der = reHex.test(pem) ? Hex.decode(pem) : Base64.unarmor(pem);
        decode(der);
    } catch (e) {
        id('tree').innerHTML = toHTML(e);
        id('dump').innerHTML = '';
    }
    return false;
}
function decodeBinaryString(str) {
    try {
        var der = [];
        for (var i = 0; i < str.length; ++i)
            der[der.length] = str.charCodeAt(i);
        decode(der);
    } catch (e) {
        id('tree').innerHTML = toHTML(e);
    }
    return false;
}
function clearAll() {
    id('pem').value = '';
    id('tree').innerHTML = '';
    id('dump').innerHTML = '';
    return false;
}
function load() {
    var file = id('file');
    id('pem').value = ''; // clear text area, will get hex content
    if (!file.files) {
        alert("Your browser doesn't support reading files; try Firefox or Chrome.");
        return false;
    }
    if (file.files.length === 0) {
        alert("Select a file to load first.");
        return false;
    }
    var f = file.files[0];
    if (f.getAsBinary) { // Firefox way
        var derStr = f.getAsBinary();
        decodeBinaryString(derStr);
    } else if (window.FileReader) { // Chrome way
        var r = new FileReader();
        r.onloadend = function () {
            if (r.error) {
                alert("Your browser couldn't read the specified file (error code " + r.error.code + ").");
                return false;
            } else
                decodeBinaryString(r.result);
        };
        r.readAsBinaryString(f);
    } else {
        alert("Your browser doesn't support reading files; try Firefox or Chrome.");
        return false;
    }
    return false;
}
function loadFromHash() {
    if (window.location.hash && window.location.hash != hash) {
        hash = window.location.hash;
        id('pem').value = hash.substring(1);
        decodeArea();
    }
}
window.onload = loadFromHash;
if ('onhashchange' in window)
    window.onhashchange = loadFromHash;

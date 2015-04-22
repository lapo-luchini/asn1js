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
        // update URL hash
        if (hex.length < 10240)
            hash = window.location.hash = '#' + hex;
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
    var der;
    try {
        if (reHex.test(str))
            der = Hex.decode(str);
        else if (Base64.re.test(str))
            der = Base64.unarmor(str);
        else {
            der = [];
            for (var i = 0; i < str.length; ++i)
                der[der.length] = str.charCodeAt(i);
        }
        decode(der);
    } catch (e) {
        id('tree').innerHTML = 'Cannot decode file.';
        id('dump').innerHTML = '';
    }
    return false;
}
function clearAll() {
    id('pem').value = '';
    id('tree').innerHTML = '';
    id('dump').innerHTML = '';
    hash = window.location.hash = '';
    return false;
}
// this is only used if window.FileReader
function read(f) {
    id('pem').value = ''; // clear text area, will get hex content
    var r = new FileReader();
    r.onloadend = function () {
        if (r.error) {
            alert("Your browser couldn't read the specified file (error code " + r.error.code + ").");
        } else
            decodeBinaryString(r.result);
    };
    r.readAsBinaryString(f);
}
function load() {
    var file = id('file');
    if (file.files.length === 0) {
        alert("Select a file to load first.");
        return false;
    }
    read(file.files[0]);
    return false;
}
function loadFromHash() {
    if (window.location.hash && window.location.hash != hash) {
        hash = window.location.hash;
        id('pem').value = hash.substring(1);
        decodeArea();
    }
}
function stop(e) {
    e.stopPropagation();
    e.preventDefault();
}
function dragAccept(e) {
    stop(e);
    if (e.dataTransfer.files.length > 0)
        read(e.dataTransfer.files[0]);
}
window.onload = function () {
    if ('onhashchange' in window)
        window.onhashchange = loadFromHash;
    loadFromHash();
    document.ondragover = stop;
    document.ondragleave = stop;
    if ('FileReader' in window) {
        id('file').style.display = 'block';
        id('file').onchange = load;
        document.ondrop = dragAccept;
    }
};

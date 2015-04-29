/*jshint browser: true, strict: true, globalstrict: true, indent: 4, immed: true, latedef: true, undef: true, regexdash: false */
/*global Hex, Base64, ASN1 */
"use strict";

var maxLength = 10240,
    reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
    tree = id('tree'),
    dump = id('dump'),
    wantHex = id('wantHex'),
    wantSchema = id('wantSchema'),
    wantToObject=id("wantToObject"),
    areaSchema = id('area-schema'),
    areaObject = id("areaObject"),
    area = id('area'),
    file = id('file'),
    hash = null;
function id(elem) {
    return document.getElementById(elem);
}
function text(el, string) {
    if ('textContent' in el)
        el.textContent = string;
    else
        el.innerText = string;
}
function printObject(o, t) {
    if (!t) t = 0;
    var s = '';
    for (var i in o) {
        s += printTab(t) + i + ": ";
        if (typeof o[i] == "object")
            s += "\n" + printObject(o[i], t + 1);
        else {
            s += o[i].replace(/\n/, " ");
            s += "\n";
        }
    }
    return s;
}
function printTab(t) {
    var s = '';
    for (var i = 0; i < t; i++)
        s += '\t';
    return s;
}
function decode(der) {
    tree.innerHTML = '';
    dump.innerHTML = '';
    areaObject.value === '';
    try {
        var asn1 = ASN1.decode(der);
        tree.appendChild(asn1.toDOM());
        if (wantHex.checked)
            dump.appendChild(asn1.toHexDOM());
        var hex = (der.length < maxLength) ? asn1.toHexString() : '';
        if (area.value === '') 
            area.value = hex;
        try {
            window.location.hash = hash = '#' + hex;
        } catch (e) { // fails with "Access Denied" on IE with URLs longer than ~2048 chars
            window.location.hash = hash = '#';
        }
        if (wantSchema.checked) {
            var res = ASN1Schema.parse(areaSchema.value);
            ASN1.schemas.import(res);
            if (wantToObject.checked) {
                var o = ASN1Schema.get(res[0]).toObject(asn1);
                areaObject.value = printObject(o)
            }
        }
    } catch (e) {
        text(tree, e);
    }
}
function decodeArea() {
    try {
        var val = area.value,
            der = reHex.test(val) ? Hex.decode(val) : Base64.unarmor(val);
        decode(der);
    } catch (e) {
        text(tree, e);
        dump.innerHTML = '';
    }
}
function decodeBinaryString(str) {
    var der;
    try {
        if (reHex.test(str))
            der = Hex.decode(str);
        else if (Base64.re.test(str))
            der = Base64.unarmor(str);
        else
            der = str;
        decode(der);
    } catch (e) {
        text(tree, 'Cannot decode file.');
        dump.innerHTML = '';
    }
}
function clearAll() {
    area.value = '';
    areaObject.value = '';
    tree.innerHTML = '';
    dump.innerHTML = '';
    hash = window.location.hash = '';
}
// this is only used if window.FileReader
function read(f) {
    area.value = ''; // clear text area, will get hex content
    var r = new FileReader();
    r.onloadend = function () {
        if (r.error)
            alert("Your browser couldn't read the specified file (error code " + r.error.code + ").");
        else
            decodeBinaryString(r.result);
    };
    r.readAsBinaryString(f);
}
function load() {
    if (file.files.length === 0)
        alert("Select a file to load first.");
    else
        read(file.files[0]);
}
function loadFromHash() {
    if (window.location.hash && window.location.hash != hash) {
        hash = window.location.hash;
        area.value = hash.substr(1);
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
// main
if ('onhashchange' in window)
    window.onhashchange = loadFromHash;
loadFromHash();
document.ondragover = stop;
document.ondragleave = stop;
if ('FileReader' in window) {
    file.style.display = 'block';
    file.onchange = load;
    document.ondrop = dragAccept;
}


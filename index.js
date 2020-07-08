/*global Hex, Base64, ASN1 */
"use strict";

var maxLength = 10240,
    reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
    tree = id('tree'),
    dump = id('dump'),
    wantHex = id('wantHex'),
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
function decode(der, offset) {
    offset = offset || 0;
    tree.innerHTML = '';
    dump.innerHTML = '';
    try {
        var asn1 = ASN1.decode(der, offset);
        tree.appendChild(asn1.toDOM());
        if (wantHex.checked)
            dump.appendChild(asn1.toHexDOM());
        var b64 = (der.length < maxLength) ? asn1.toB64String() : '';
        if (area.value === '')
            area.value = Base64.pretty(b64);
        try {
            window.location.hash = hash = '#' + b64;
        } catch (e) { // fails with "Access Denied" on IE with URLs longer than ~2048 chars
            window.location.hash = hash = '#';
        }
        var endOffset = asn1.posEnd();
        if (endOffset < der.length) {
            var p = document.createElement('p');
            p.innerText = 'Input contains ' + (der.length - endOffset) + ' more bytes to decode.';
            var button = document.createElement('button');
            button.innerText = 'try to decode';
            button.onclick = function () {
                decode(der, endOffset);
            };
            p.appendChild(button);
            tree.insertBefore(p, tree.firstChild);
        }
    } catch (e) {
        text(tree, e);
    }
}
function decodeText(val) {
    try {
        var der = reHex.test(val) ? Hex.decode(val) : Base64.unarmor(val);
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
// set up buttons
id('butDecode').onclick = function () { decodeText(area.value); };
id('butClear').onclick = function () {
    area.value = '';
    tree.innerHTML = '';
    dump.innerHTML = '';
    hash = window.location.hash = '';
}
id('butExample').onclick = function () {
    var demo = 'MIAGCSqGSIb3DQEHAqCAMIACAQExCzAJBgUrDgMCGgUAMIAGCSqGSIb3DQEHAQAAoIAwggHvMIIBWKADAgECAhAvoXazbunwSfREtACZZhlFMA0GCSqGSIb3DQEBBQUAMAwxCjAIBgNVBAMMAWEwHhcNMDgxMDE1MTUwMzQxWhcNMDkxMDE1MTUwMzQxWjAMMQowCAYDVQQDDAFhMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJUwlwhu5hR8X01f-vG0mKPRHsVRjpZNxSEmsmFPdDiD9kylE3ertTDf0gRkpIvWfNJ-eymuxoXF0Qgl5gXAVuSrjupGD6J-VapixJiwLXJHokmDihLs3zfGARz08O3qnO5ofBy0pRxq5isu_bAAcjoByZ1sI_g0iAuotC1UFObwIDAQABo1IwUDAOBgNVHQ8BAf8EBAMCBPAwHQYDVR0OBBYEFEIGXQB4h-04Z3y_n7Nv94-CqPitMB8GA1UdIwQYMBaAFEIGXQB4h-04Z3y_n7Nv94-CqPitMA0GCSqGSIb3DQEBBQUAA4GBAE0G7tAiaacJxvP3fhEj-yP9VDxL0omrRRAEaMXwWaBf_Ggk1T_u-8_CDAdjuGNCiF6ctooKc8u8KpnZJsGqnpGQ4n6L2KjTtRUDh-hija0eJRBFdirPQe2HAebQGFnmOk6Mn7KiQfBIsOzXim_bFqaBSbf06bLTQNwFouSO-jwOAAAxggElMIIBIQIBATAgMAwxCjAIBgNVBAMMAWECEC-hdrNu6fBJ9ES0AJlmGUUwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTA4MTAxNTE1MDM0M1owIwYJKoZIhvcNAQkEMRYEFAAAAAAAAAAAAAAAAAAAAAAAAAAAMA0GCSqGSIb3DQEBAQUABIGAdB7ShyMGf5lVdZtvwKlnYLHMUqJWuBnFk7aQwHAmg3JnH6OcgId2F-xfg6twXm8hhUBkhHPlHGoWa5kQtN9n8rz3NorzvcM_1Xv9-0Eal7NYSn2Hb0C0DMj2XNIYH2C6CLIHkmy1egzUvzsomZPTkx5nGDWm-8WHCjWb9A6lyrMAAAAAAAA';
    decodeText(demo);
};
// this is only used if window.FileReader
function read(f) {
    area.value = ''; // clear text area, will get b64 content
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
        // Firefox is not consistent with other browsers and returns an
        // already-decoded hash string so we risk double-decoding here,
        // but since % is not allowed in base64 nor hexadecimal, it's ok
        var val = decodeURIComponent(hash.substr(1));
        if (val.length)
            decodeText(val);
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
if ('FileReader' in window && 'readAsBinaryString' in (new FileReader())) {
    file.style.display = 'block';
    file.onchange = load;
    document.ondrop = dragAccept;
}

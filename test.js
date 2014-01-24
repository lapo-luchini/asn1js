var Hex = require('./hex.js'),
    ASN1 = require('./asn1.js'),
    tests;

tests = [
    // 060B2B0E0302FFFFFFFFFFFF7F
    // -------------
    // http://luca.ntop.org/Teaching/Appunti/asn1.html
    // actually reports the string as "011011100101110111"
    ['03 04 06 6e 5d c0', '(18 bit)\n111011101001110110', 'DER encoding'],
    ['03 04 06 6e 5d e0', '(18 bit)\n111011101001110110', 'padded with "100000"'],
    ['03 81 04 06 6e 5d c0', '(18 bit)\n111011101001110110', 'long form of length octets'],
    ['23 09 03 03 00 6e 5d 03 02 06 c0', '(18 bit)\n111011101001110110', 'constructed encoding: "0110111001011101" + "11"'],
];

tests.forEach(function (t) {
    var input = t[0],
        expected = t[1],
        comment = t[2],
        result = null;
    try {
        result = ASN1.decode(Hex.decode(input)).content();
    } catch (e) {
        result = 'exception';
    }
    if (result == expected)
        console.log('\x1B[1m\x1B[32mOK \x1B[39m\x1B[22m ' + comment);
    else
        console.log('\x1B[1m\x1B[31mERR\x1B[39m\x1B[22m ' + comment + '\n' + result);
});

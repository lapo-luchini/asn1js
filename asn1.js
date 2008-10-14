function unarmor(a) {
    var out = [];
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var dec = [];
    for (var i = 0; i < 64; ++i)
	dec[b64[i]] = i;
    var bits = 0, char_count = 0;
    for (var i = 0; i < a.length; ++i) {
	var c = a[i];
	if (c == '=')
            break;
	c = dec[c];
	if (c == undefined)
            continue;
	bits |= c;
	++char_count;
	if (char_count == 4) {
	    out[out.length] = (bits >> 16);
	    out[out.length] = (bits >> 8) & 0xFF;
	    out[out.length] = bits & 0xFF;
	    bits = 0;
	    char_count = 0;
	} else {
	    bits <<= 6;
	}
    }
    switch (char_count) {
      case 1:
	alert("base64 encoding incomplete: at least 2 bits missing");
	break;
      case 2:
	out[out.length] = (bits >> 10);
	break;
      case 3:
	out[out.length] = (bits >> 16);
	out[out.length] = (bits >> 8) & 0xFF;
	break;
    }
    return out;
}

function Parser(enc, pos) {
    if (enc instanceof Parser) {
        this.enc = enc.enc;
        this.pos = enc.pos;
    } else {
        this.enc = enc;
        this.pos = pos;
    }
}
Parser.prototype.get = function() {
    return this.enc[this.pos++];
}

function ASN1(parser, header, length, type, sub) {
    this.parser = parser;
    this.header = header;
    this.length = length;
    this.type = type;
    this.sub = sub;
}
ASN1.prototype.typeName = function() {
    if (this.type == undefined)
	return "unknown";
    switch (this.type) {
    case 0x01: return "BOOLEAN";
    case 0x02: return "INTEGER";
    case 0x03: return "BIT_STRING";
    case 0x04: return "OCTET_STRING";
    case 0x05: return "NULL";
    case 0x06: return "OBJECT_IDENTIFIER";
    case 0x13: return "TeletexString";
    case 0x14: return "IA5String";
    case 0x16: return "UTCTime";
    case 0x17: return "TeletexString";
    case 0x30: return "SEQUENCE";
    case 0x31: return "SET";
    default: return "0x" + this.type.toString(16);
    }
}
ASN1.prototype.toString = function() {
    return this.typeName() + "@" + this.parser.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub == null ? 'null' : this.sub.length) + "]";
}
ASN1.prototype.print = function(indent) {
    if (indent == undefined) indent = '';
    document.writeln(indent + this);
    if (this.sub != null) {
        indent += '  ';
        for (var i = 0, max = this.sub.length; i < max; ++i)
            this.sub[i].print(indent);
    }
}
ASN1.prototype.toPrettyString = function(indent) {
    if (indent == undefined) indent = '';
    var s = indent + this + "\n";
    if (this.sub != null) {
        indent += '  ';
        for (var i = 0, max = this.sub.length; i < max; ++i)
            s += this.sub[i].toPrettyString(indent);
    }
    return s;
}

function decodeLength(parser) {
    var buf = parser.get();
    var len = buf & 0x7F;
    if (len == buf)
        return len;
    if (len > 3)
        throw "Length over 24 bits not supported at position " + (parser.pos - 1);
    buf = 0;
    for (var i = 0; i < len; ++i)
        buf = (buf << 8) | parser.get();
    return buf;
}

function decodeASN1(parser) {
    if (!(parser instanceof Parser))
        parser = new Parser(parser, 0);
    var parserStart = new Parser(parser);
    var type = parser.get();
    var len = decodeLength(parser);
    var header = parser.pos - parserStart.pos;
    var sub = null;
    if ((type == 0x30) || (type == 0x31)) {
        sub = [];
        var end = parser.pos + len;
        while (parser.pos < end)
            sub[sub.length] = decodeASN1(parser);
    } else
        parser.pos += len; // skip content
    return new ASN1(parserStart, header, len, type, sub);
}

function test() {
    var test = [
        { value: [0x27],                   expected: 0x27     },
        { value: [0x81, 0xC9],             expected: 0xC9     },
        { value: [0x83, 0xFE, 0xDC, 0xBA], expected: 0xFEDCBA },
    ];
    for (var i = 0, max = test.length; i < max; ++i) {
        var pos = 0;
        var parser = new Parser(test[i].value, 0);
        var res = decodeLength(parser);
        if (res != test[i].expected)
            document.write("In test[" + i + "] expected " + test[i].expected + " got " + res + "\n");
    }
}
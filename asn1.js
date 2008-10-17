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

function ASN1(parser, header, length, tag, sub) {
    this.parser = parser;
    this.header = header;
    this.length = length;
    this.tag = tag;
    this.sub = sub;
}
ASN1.prototype.typeName = function() {
    if (this.tag == undefined)
	return "unknown";
    var tagClass = this.tag >> 6;
    var tagConstructed = (this.tag >> 5) & 1;
    var tagNumber = this.tag & 0x1F;
    switch (tagClass) {
    case 0: // universal
	switch (tagNumber) {
	case 0x00: return "EOC";
	case 0x01: return "BOOLEAN";
	case 0x02: return "INTEGER";
	case 0x03: return "BIT_STRING";
	case 0x04: return "OCTET_STRING";
	case 0x05: return "NULL";
	case 0x06: return "OBJECT_IDENTIFIER";
	case 0x07: return "ObjectDescriptor";
	case 0x08: return "EXTERNAL";
	case 0x09: return "REAL";
	case 0x0A: return "ENUMERATED";
	case 0x0B: return "EMBEDDED_PDV";
	case 0x0C: return "UTF8String";
	case 0x10: return "SEQUENCE";
	case 0x11: return "SET";
	case 0x12: return "NumericString";
	case 0x13: return "PrintableString"; // ASCII subset
	case 0x14: return "TeletexString"; // aka T61String
	case 0x15: return "VideotexString";
	case 0x16: return "IA5String"; // ASCII
	case 0x17: return "UTCTime";
	case 0x18: return "GeneralizedTime";
	case 0x19: return "GraphicString";
	case 0x1A: return "VisibleString"; // ASCII subset
	case 0x1B: return "GeneralString";
	case 0x1C: return "UniversalString";
	case 0x1E: return "BMPString";
	default: return "Universal_" + tagNumber.toString(16);
	}
    case 1: return "Application_" + tagNumber.toString(16);
    case 2: return "[" + tagNumber + "]"; // Context
    case 3: return "Private_" + tagNumber.toString(16);
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
    var s = indent + this.typeName() + " @" + this.parser.pos;
    if (this.length >= 0)
	s += "+";
    s += this.length;
    if (this.tag & 0x20)
	s += " (constructed)";
    else if (((this.tag == 0x03) || (this.tag == 0x04)) && (this.sub != null))
	s += " (encapsulates)";
    s += "\n";
    if (this.sub != null) {
        indent += '  ';
        for (var i = 0, max = this.sub.length; i < max; ++i)
            s += this.sub[i].toPrettyString(indent);
    }
    return s;
}
function switchSize() {
    var style = this.switchNode.style;
    //style.visibility = (style.visibility == "hidden") ? "visible" : "hidden";
    style.display = (style.display == "none") ? "block" : "none";
}
ASN1.prototype.toDOM = function() {
    var node = document.createElement("div");
    node.className = "node";
    node.asn1 = this;
    var head = document.createElement("div");
    head.className = "head";
    var s = this.typeName() + " @" + this.parser.pos;
    if (this.length >= 0)
	s += "+";
    s += this.length;
    if (this.tag & 0x20)
	s += " (constructed)";
    else if (((this.tag == 0x03) || (this.tag == 0x04)) && (this.sub != null))
	s += " (encapsulates)";
    s += "\n";
    head.innerHTML = s;
    node.appendChild(head);
    var sub = document.createElement("div");
    sub.className = "sub";
    if (this.sub != null) {
        for (var i = 0, max = this.sub.length; i < max; ++i)
            sub.appendChild(this.sub[i].toDOM());
    }
    node.appendChild(sub);
    head.onclick = switchSize;
    head.switchNode = sub;
    return node;
}

function decodeLength(parser) {
    var buf = parser.get();
    var len = buf & 0x7F;
    if (len == buf)
        return len;
    if (len > 3)
        throw "Length over 24 bits not supported at position " + (parser.pos - 1);
    if (len == 0)
	return -1; // undefined
    buf = 0;
    for (var i = 0; i < len; ++i)
        buf = (buf << 8) | parser.get();
    return buf;
}

function hasContent(tag, len, parser) {
    if (tag & 0x20) // constructed
	return true;
    if ((tag < 0x03) || (tag > 0x04))
	return false;
    var p = new Parser(parser);
    if (tag == 0x03) p.get(); // BitString unused bits, must be in [0, 7]
    var subTag = p.get();
    if ((subTag >> 6) & 0x01) // not (universal or context)
	return false;
    try {
	var subLength = decodeLength(p);
	return ((p.pos - parser.pos) + subLength == len);
    } catch (exception) {
	return false;
    }
}

function decodeASN1(parser) {
    if (!(parser instanceof Parser))
        parser = new Parser(parser, 0);
    var parserStart = new Parser(parser);
    var tag = parser.get();
    var len = decodeLength(parser);
    var header = parser.pos - parserStart.pos;
    var sub = null;
    if (hasContent(tag, len, parser)) {
	var start = parser.pos;
	// it's constructed, so we have to decode content
	if (tag == 0x03) parser.get(); // BitString unused bits, must be in [0, 7]
        sub = [];
	if (len >= 0) {
	    // definite length
	    var end = start + len;
	    while (parser.pos < end)
		sub[sub.length] = decodeASN1(parser);
	    if (parser.pos != end)
		throw "Content overflowed the constructed container";
	} else {
	    // undefined length
	    for (;;) {
		var s = decodeASN1(parser);
		if (s.tag == 0)
		    break;
		sub[sub.length] = s;
	    }
	    len = start - parser.pos;
	}
    } else
        parser.pos += len; // skip content
    return new ASN1(parserStart, header, len, tag, sub);
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
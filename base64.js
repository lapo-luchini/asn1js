Base64 = {};

Base64.unarmor = function(a) {
    var out = [];
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var dec = [];
    for (var i = 0; i < 64; ++i)
	dec[b64[i]] = i;
    var bits = 0, char_count = 0;
    for (var i = 0; i < a.length; ++i) {
	var c = a.charAt(i);
	if (c == '=')
            break;
	c = dec[c];
	if (c == undefined)
            continue;
	bits |= c;
	if (++char_count >= 4) {
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

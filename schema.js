(function () {

    var schemas = {}

    //export schemas
    var ASN1 = {
        schemas: schemas,
        MAX: Number.MAX_VALUE
    };
    if (window.ASN1)
        a2b(ASN1, window.ASN1);
    else
        window.ASN1 = ASN1;

    schemas["BOOLEAN"] = {
        tag: 1,
        isCompiled: true,
        isSimple: true,
    }

    schemas["INTEGER"] = {
        tag: 2,
        isCompiled: true,
        isSimple: true,
    }

    schemas["BIT STRING"] = {
        tag: 3,
        isCompiled: true,
        isSimple: true,
    }

    schemas["OCTET STRING"] = {
        tag: 4,
        isCompiled: true,
        isSimple: true,
    }

    schemas["NULL"] = {
        tag: 5,
        isCompiled: true,
        isSimple: true,
    }

    schemas["OBJECT IDENTIFIER"] = {
        tag: 6,
        isCompiled: true,
        isSimple: true,
    }

    schemas["OBJECT DESCIPTOR"] = {
        tag: 7,
        isCompiled: true,
        isSimple: true,
    }

    schemas["EXTERNAL"] = {
        tag: 8,
        isCompiled: true,
        isSimple: true,
    }

    schemas["REAL"] = {
        tag: 9,
        isCompiled: true,
        isSimple: true,
    }

    schemas["ENUMERATED"] = {
        tag: 10,
        isCompiled: true,
        isSimple: true,
    }

    schemas["UTF8 STRING"] = {
        tag: 12,
        isCompiled: true,
        isSimple: true,
    }

    schemas["SEQUENCE"] = {
        tag: 16,
        isCompiled: true,
        value: {},
    }

    schemas["SET"] = {
        tag: 17,
        isCompiled: true,
        value: {},
    }

    schemas["NUMERIC STRING"] = {
        tag: 18,
        isCompiled: true,
        isSimple: true,
    }

    schemas["PRINTABLE STRING"] = {
        tag: 19,
        isCompiled: true,
        isSimple: true,
    }

    schemas["T61 STRING"] = {
        tag: 20,
        isCompiled: true,
        isSimple: true,
    }
    schemas["TELETEX STRING"] = schemas["T61 STRING"]; //alias

    schemas["VIDEOTEX STRING"] = {
        tag: 21,
        isCompiled: true,
        isSimple: true,
    }

    schemas["IA5 STRING"] = {
        tag: 22,
        isCompiled: true,
        isSimple: true,
    }

    schemas["UTC TIME"] = {
        tag: 23,
        isCompiled: true,
        isSimple: true,
    }

    schemas["UTCTime"] = schemas["UTC TIME"];

    schemas["GENERALIZED TIME"] = {
        tag: 24,
        isCompiled: true,
        isSimple: true,
    }
    schemas["GeneralizedTime"] = schemas["GENERALIZED TIME"]

    schemas["GRAPHIC STRING"] = {
        tag: 25,
        isCompiled: true,
        isSimple: true,
    }

    schemas["ISO64 STRING"] = {
        tag: 26,
        isCompiled: true,
        isSimple: true,
    }
    schemas["VISIBLE STRING"] = schemas["ISO64 STRING"] //alias

    schemas["GENERAL STRING"] = {
        tag: 27,
        isCompiled: true,
        isSimple: true,
    }

    schemas["UNIVERSAL STRING"] = {
        tag: 28,
        isCompiled: true,
        isSimple: true,
    }

    schemas["BMP STRING"] = {
        tag: 30,
        isCompiled: true,
        isSimple: true,
    }

    schemas["ANY"] = {
        isCompiled: true,
        isSimple: true,
    }

    schemas["CHOICE"] = {
        isCompiled: true,
        value: {},
    }

    schemas.import = function (s) {
        for (var i in s)
            schemas[s[i].name] = s[i];
    }

    //copy Object 'a' to Object 'b'
    function a2b(a, b) {
        for (var i in a) {
            if (typeof (b[i]) == "object" && typeof (a[i]) == "object") {
                for (var j in a[i]) {
                    b[i][j] = a[i][j];
                }
            }
            else
                //if (!(b.hasOwnProperty(i))) // copy only not exist
                b[i] = a[i];
        }
        b.toObject = toObject;
    }

    function merge(s) {
        var n = "";
        if (typeof (s) == "string") {
            var n = s;
            s = schemas[s];
            if (!s)
                throw new Error("Schema '" + n + "' is not founded");
            s.name = n;
        }

        //TODO: check props of schema for registered names (type, value, explicit, implicit, default ...)
        if (s.name == "Extensions") {
            "";
        }


        if (!s.isCompiled) {
            //check prop type
            if (!s.hasOwnProperty("type"))
                throw new Error("Schema '" + n + "' hasn't got property 'type'");
            if (typeof (s.type) != "string")
                throw new TypeError("Schema '" + n + "' has wrong type of property 'type'. Must be String");
            if (n == "")
                n = s.type;
            var a = merge(s.type);
            a2b(a, s);


            if (!s.isSimple) {
                //check prop value
                if (!s.hasOwnProperty("value"))
                    throw new Error("Schema '" + n + "' hasn't got property 'value'");
                if (typeof (s.value) != "object")
                    throw new TypeError("Schema '" + n + "' has wrong type of property 'value'. Must be Object");
                for (var i in s.value) {
                    var b = s.value[i];
                    merge(b);
                }
            }
            s.name = n;
        }
        return s;
    }

    function err(s, t) {
        var of = s.type == "SET" ? " OF " + s.value[Object.keys(s.value)[0]].type : "";
        var type = s.type;
        var name = s.name == s.type ? "" : "(" + s.name + ")";
        var ctx = s.hasOwnProperty("context") ? "[" + s.context + "]" : "";

        return type + of + name + ctx + ": " + t;
    }

    function toObject(a) {
        var c = a.tag.tagClass;
        var n = a.tag.tagNumber;
        var o = {};
        //CHOICE
        if (this.type == "CHOICE") {
            var _o = null;
            for (var i in this.value) {
                try {
                    _o = this.value[i].toObject(a);
                }
                catch (e) {
                }
                if (_o) {
                    return _o;
                }
            }
            throw new Error(err(this, "ASN1 data no match to CHOICE schema"))
        }
        //ANY
        if (this.type == "ANY") {
            o = a.content();
            return o;
        }
        //CONTEXT SPECIFIC
        if (this.hasOwnProperty("context")) //context specific
        {
            if (c != 2)
                throw new Error(err(this, "Data must be context specific class."));
            if (n != this.context)
                throw new Error(err(this, "Wrang context specific number."));
            if (this.hasOwnProperty("explicit")) { // explicit
                a = a.sub[0]
                if (!a)
                    throw new Error(err(this, "ASN data hasn't got sub data."));
                c = a.tag.tagClass;
                n = a.tag.tagNumber;
            }
            else {
                c = 0;
                n = this.tag;
            }
        }
        // universal
        if (c != 0)
            throw new Error(err(this, "Data must be universal class."));
        if (n != this.tag)
            throw new Error(err(this, "Wrang tag class value."));
        if (this.type == "SEQUENCE" || this.type == "SET") {
            if (!a.tag.tagConstructed)
                throw new Error(err(this, "ASN data must be constructed."));
            //SEQUENCE
            if (this.type == "SEQUENCE" && !(this.hasOwnProperty("minOccures") || this.hasOwnProperty("maxOccures"))) {
                var j = 0;
                for (var i in this.value) {
                    var s = this.value[i];
                    try {
                        o[i] = s.toObject(a.sub[j++]);
                    } catch (e) {
                        if (!(s.default || s.optional))
                            throw new Error(e.message + "\n    " + err(this, "Wrang ASN1 data"));
                        if (s.default)
                            o[i] = s.default;
                    }
                }
            } else { // ARRAY
                var j = 0;
                var min = this.minOccures ? this.minOccures : 0;
                var max = this.maxOccures ? this.maxOccures : ASN1.MAX;
                var arrayName = Object.keys(this.value)[0]
                //var m = o[arrayName] = [];
                var m = o = [];
                for (var i in a.sub) {
                    try {
                        m.push(this.value[arrayName].toObject(a.sub[i]));
                    }
                    catch (e) {
                        throw new Error(e.message + "\n    " + err(this, "Wrang ASN1 data in SET at index " + j));
                    }
                    j++;
                }
                if (!(min <= j && j <= max)) {
                    throw new Error(err(this, "Out of MIN or MAX set."));
                }
            }
            return o;
        } else {
            if (a.tag.tagConstructed)
                throw new Error(err(this, "ASN data must be simple ASN1 type '" + this.type + "'."));
        }
        return a.content();
    }

    function parse(text) {
        if (typeof text !== "string")
            throw new TypeError("Parameter 1 must be String")
        var templates = stringify(text);
        var schemas = [];
        for (var i in templates) {
            var schema = createSchema(templates[i], "base");
            schemas.push(schema);
        }
        return schemas;
    }

    function eachLine(text, cb) {
        var line = /.+\n/g;
        var res = "";
        while (res = line.exec(text)) {
            if (cb(res[0]) === false)
                break;
        }
    }

    function stringify(text) {
        var begin = /.+\{/
        var res = removeComment(text);
        res = removeNewLine(res);
        return res;
    }

    function removeComment(text) {
        var comment = /[-]{2}.*/
        var res = "";
        eachLine(text, function (row) {
            res += row.replace(comment, "");
        })
        return res;
    }

    function removeNewLine(text) {
        var res = [];
        var row = "";
        var ref = 0;
        var O = /\{/;
        var C = /\}/;
        var S = /^\s*$/;
        eachLine(text, function (_row) {
            if (O.exec(_row))
                ref++;
            if (C.exec(_row))
                ref--;
            if (ref < 0)
                throw new Error("Schema has extra '}'");
            row += _row.replace(/\n/, "");
            if (ref == 0) {
                if (!S.test(row))
                    res.push(row);
                row = "";
            }
        })
        return res;
    }

    var regSchema = /^\s*([A-Za-z]+)\s+(\:\:\=)\s*([\w]+\s[\w]+|[\w]+)\s*(\{(.*)\}){0,1}$/;
    var regKeyword = /\W([A-Z]+)\W/;
    var regBaseSchema = /\W([A-Z][a-z]\w+)\W/;
    var regItemName = /\W([a-z]\w+)\W/;
    var regItemWord = /[\s\{]?([A-Za-z\[\]\d]+)[\s\}]{0,1}/g;
    var regContext = /\[(\d+)\]/;

    var reg = {
        base: {
            reg: /^\s*([A-Za-z]+)\s+\:\:\=\s+(.+)\s*$/, // name ::=
            types: {
                sequence: /^\s*(SEQUENCE|SET|CHOICE)\s+{(.+)}\s*$/, // name ::= SEQUENCE|SET|CHOICE{}
                array: /(SEQUENCE|SET)\s*(SIZE\s+\((.+)\))?\s+OF\s+(\w+)\s*(\{(.+)\})?/, // SEQUENCE|SET [SIZE (..)] OF type
                simple: /(\w+\s\w+|\w+)\s*/, // type
            }
        }
    }
    reg.internal = {
        reg: /^\s*([a-z][\w\-]+)\s+(.+)\s*$/, // name
        types: {
            sequence: reg.base.types.sequence,
            array: reg.base.types.array,
            simple: /(\[\d\])?\s*(EXPLICIT|IMPLICIT)?\s*((BIT|OCTET|OBJECT|UTF8|NUMERIC|PRINTABLE|T61|TELETEX|VIDEOTEX|IA5|UTC|GENERALIZED|GRAPHIC|ISO64|VISIBLE|GENERAL|UNIVERSAL|BMP)\s\w+|\w+)\s*(DEFINED BY \w+)?\s*(OPTIONAL|DEFAULT)?\s*(.*)/, // EXPLICIT|IMPLICIT type [DEFINED BY name] OPTIONAL|DEFAULT
        }
    }

    var step = 0;
    function createSchema(text, type) {
        step++;
        if (step == 68) {
            ""
        }
        if (!reg.hasOwnProperty(type))
            throw new TYpeError("Unknown type of schema");
        var template = reg[type].reg.exec(text);
        if (!template) {
            var e = new Error("Wrang schema structure");
            e.schema = text;
            throw e;
        }
        var res = {
            name: template[1],
        }

        if (res.name == "Extensions") {
            "";
        }

        var schema_type = null;
        var ctx;
        for (var i in reg[type].types) {
            var _reg = reg[type].types[i];
            if (ctx = _reg.exec(template[2])) {
                schema_type = i;
                break;
            }
        }
        if (!schema_type) {
            throw new Error("Schema is not match to ASN1 schema");
        }

        switch (schema_type) {
            case "simple":
                if (type == "base")
                    res.type = ctx[1];
                else {
                    res.type = ctx[3];
                    if (ctx[1] != undefined)
                        res.context = +regContext.exec(ctx[1])[1];
                    if (ctx[2] == "EXPLICIT")
                        res.explicit = true;
                    if (ctx[2] == "IMPLICIT")
                        res.implicit = true;
                    if (ctx[6] == "DEFAULT")
                        res.default = ctx[7];
                    if (ctx[6] == "OPTIONAL")
                        res.optional = true;
                }
                break;
            case "sequence":
                res.type = ctx[1];
                res.value = parseSequence(ctx[2]);
                break;
            case "array":
                res.type = ctx[1];
                res.value = {};
                res.value.items = {};
                if (ctx[2]) {
                    res.maxOccures = (/\.\.(\d+|MAX)/).exec(ctx[3])[1];
                    if (res.maxOccures == "MAX") {
                        res.maxOccures = ASN1.MAX;
                    } else {
                        res.maxOccures = parseInt(res.maxOccures);
                    }
                    res.minOccures = parseInt((/(\d+)\.\./).exec(ctx[3])[1]);
                    res.value.items.type = ctx[4];
                } else {
                    res.maxOccures = ASN1.MAX;
                    res.minOccures = 0;
                    res.value.items.type = ctx[4];
                }
                if (res.value.items.type == "SEQUENCE") {
                    res.value.items.value = parseSequence(ctx[6]);
                }
                break;
            default:
                throw new Error("Unknown schema type");
        }

        return res;
    }

    function parseSequence(text) {
        var items = splitByChar(text, ",");
        var res = {};
        for (var i in items) {
            //var item = parseSequenceItem(items[i]);
            var item = createSchema(items[i], "internal");
            res[item.name] = item;
            delete item.name;
        }
        return res;
    }

    function splitByChar(text, char) {
        var res = [];
        var row = "";
        var ref = 0;
        for (var i = 0; i < text.length; i++) {
            if (text[i] === "{")
                ref++;
            if (text[i] === "}")
                ref--;
            if ((char === text[i] || i == (text.length - 1)) && ref == 0) {
                res.push(row);
                row = "";
            } else {
                row += text[i];
            }
        }
        return res;
    }

    window.ASN1Schema = {
        get: merge,
        parse: parse
    };

})();
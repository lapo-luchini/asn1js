#/bin/sh
RFCs="5280 5208 3369 3161 2986 4211 4210"
downloadRFC() {
    URL="https://www.ietf.org/rfc/rfc$1.txt"
    if [ -x /usr/bin/fetch ]; then
        /usr/bin/fetch -m --no-verify-peer $URL
    elif [ -x /usr/bin/wget ]; then
        /usr/bin/wget -N --no-check-certificate $URL
    elif [ ! -r dumpasn1.cfg ]; then
        echo Please download $URL in this directory.
        exit 1
    fi
}
echo '{}' > rfcdef.json # start from scratch
mkdir -p rfc
cd rfc
for n in $RFCs; do
    downloadRFC $n
    ../parseRFC.js rfc$n.txt ../rfcdef.json
done
cd ..
{
    echo "// content parsed from the following RFCs: $RFCs"
    cat - <<EOF
(typeof define != "undefined" ? define : function (factory) { "use strict";
    if (typeof module == "object") module.exports = factory();
    else window.rfcdef = factory();
})(function () {
"use strict";
EOF
    echo -n "return "
    cat rfcdef.json
    echo ";});"
} > rfcdef.js
echo Conversion completed.

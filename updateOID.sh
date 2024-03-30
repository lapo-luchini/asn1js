#/bin/sh
URL='https://www.cs.auckland.ac.nz/~pgut001/dumpasn1.cfg'
if [ -x /usr/bin/fetch ]; then
    /usr/bin/fetch -m --no-verify-peer $URL
elif [ -x /usr/bin/wget ]; then
    /usr/bin/wget -N --no-check-certificate $URL
elif [ ! -r dumpasn1.cfg ]; then
    echo Please download $URL in this directory.
    exit 1
fi
cat dumpasn1.cfg | \
tr -d '\r' | \
awk -v apos="'" -v q='"' -v url="$URL" '
    function clean() {
        oid = "";
        comment = "";
        description = "";
        warning = "";
    }
    BEGIN {
        FS = "= *";
        clean();
        print "// Converted from: " url;
        print "// which is made by Peter Gutmann and whose license states:";
        print "//   You can use this code in whatever way you want,";
        print "//   as long as you don" apos "t try to claim you wrote it.";
        print "(typeof define != " q "undefined" q " ? define : function (factory) { " q "use strict" q ";";
        print "  if (typeof module == " q "object" q ") module.exports = factory();";
        print "  else window.oids = factory();";
        print "})(function () {";
        print q "use strict" q ";";
        print "return {";
    }
    /^OID/         { oid = $2; }
    /^Comment/     { comment = $2; }
    /^Description/ { description = $2; }
    /^Warning/     { warning = ", \"w\": true"; }
    /^$/ {
        if (length(oid) > 0) {
            gsub(" ", ".", oid);
            gsub("\"", "\\\"", description);
            gsub("\"", "\\\"", comment);
            if (++seen[oid] > 1)
                print "Duplicate OID in line " NR ": " oid > "/dev/stderr";
            else
                printf "\"%s\": { \"d\": \"%s\", \"c\": \"%s\"%s },\n", oid, description, comment, warning;
            clean();
        }
    }
    END {
        print "};});"
    }
' >oids.js
echo Conversion completed.

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
awk -v url="$URL" '
    function clean() {
        oid = "";
        comment = "";
        description = "";
        warning = "";
    }
    BEGIN {
        FS = "= *";
        apos = sprintf("%c", 39);
        clean();
        print "// Converted from: " url;
        print "// which is made by Peter Gutmann and whose license states:";
        print "//   You can use this code in whatever way you want,";
        print "//   as long as you don" apos "t try to claim you wrote it.";
        print "var oids = {";
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
        print "\"END\": \"\""
        print "};"
        print "if (typeof module !== " apos "undefined" apos ") { module.exports = oids; }"
    }
' >oids.js
echo Conversion completed.

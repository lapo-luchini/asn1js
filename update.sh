#/bin/sh
URL='http://www.cs.auckland.ac.nz/~pgut001/dumpasn1.cfg'
if [ -x /usr/bin/fetch ]; then
  /usr/bin/fetch -m $URL
elif [ -x /usr/bin/wget ]; then
  /usr/bin/wget -N $URL
elif [ ! -r dumpasn1.cfg ]; then
  echo Please download $URL in this directory.
  exit 1
fi
awk '
    function clean() {
	oid = "";
	comment = "";
	description = "";
	warning = "false";
    }
    BEGIN {
	FS = "= *";
	apos = sprintf("%c", 39);
	clean();
	print "// Converted from: http://www.cs.auckland.ac.nz/~pgut001/dumpasn1.cfg";
	print "// which is made by Peter Gutmann and whose license states:";
	print "//   You can use this code in whatever way you want,";
	print "//   as long as you don" apos "t try to claim you wrote it.";
	print "oids = {";
    }
    /^OID/         { oid = $2; }
    /^Comment/     { comment = $2; }
    /^Description/ { description = $2; }
    /^Warning/     { warning = "true"; }
    /^$/ {
	if (length(oid) > 0) {
	    gsub(" ", ".", oid);
	    gsub("\"", "\\\"", description);
	    gsub("\"", "\\\"", comment);
	    printf "\"%s\": { \"d\": \"%s\", \"c\": \"%s\", \"w\": %s },\n", oid, description, comment, warning;
	    clean();
	}
    }
    END {
	print "};"
    }
' <dumpasn1.cfg >oids.js
echo Conversion completed.

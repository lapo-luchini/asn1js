#/bin/sh
wget -N 'http://www.cs.auckland.ac.nz/~pgut001/dumpasn1.cfg'
awk '
    BEGIN {
	FS = "= *";
	print "// Converted from: http://www.cs.auckland.ac.nz/~pgut001/dumpasn1.cfg";
	print "oids = {";
    }
    /^Comment/     { comment = $2; }
    /^Description/ { description = $2; }
    /^OID/ {
	oid = $2;
	gsub(" ", ".", oid);
	gsub("\"", "\\\"", description);
	gsub("\"", "\\\"", comment);
	printf "\"%s\": { \"d\": \"%s\", \"c\": \"%s\" },\n", oid, description, comment;
	comment = "";
	description = "";
    }
    END {
	print "};"
    }
' <dumpasn1.cfg >oids.js
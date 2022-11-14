#!/bin/sh
set -e
FILES="
  asn1.js oids.js base64.js hex.js int10.js dom.js test.js
  index.css index.js index.html
  README.md LICENSE
  updateOID.sh check.sh
  examples
"
type gsha256sum >/dev/null && SHA256=gsha256sum || SHA256=sha256sum
$SHA256 -t $FILES | gpg --clearsign > sha256sums.asc
7z a -tzip -mx=9 asn1js.zip $FILES sha256sums.asc
rsync -Pvrtz asn1js.zip $FILES lapo.it:www/asn1js/

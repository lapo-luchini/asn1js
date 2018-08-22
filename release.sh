#!/bin/sh
set -e
FILES="
  asn1.js oids.js base64.js hex.js int10.js dom.js test.js
  index.css index.js index.html
  README.md LICENSE
  update.sh check.sh
"
sha256sum </dev/null >/dev/null 2>&1 && SHA256=sha256sum || SHA256=gsha256sum
$SHA256 -t $FILES | gpg --clearsign > sha256sums.asc
7z a -tzip -mx=9 asn1js.zip $FILES sha256sums.asc
rsync -Pvrtz asn1js.zip $FILES lapo.it:www/asn1js/

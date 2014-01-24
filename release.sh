#!/bin/sh
set -e
FILES="
  asn1.js oids.js base64.js hex.js dom.js test.js
  index.css index.js index.html
  README.md LICENSE
  update.sh check.sh
"
sha256sum -t $FILES | gpg --clearsign > sha256sums.asc
7z a -tzip -mx=9 asn1js.zip $FILES sha256sums.asc
rsync -Pvrtz asn1js.zip lapo.it:www/asn1js/

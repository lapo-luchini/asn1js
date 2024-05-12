#!/bin/sh
set -e
FILES="
  asn1.js oids.js defs.js base64.js hex.js int10.js dom.js rfcdef.js test.js tags.js
  context.js index.css index-dark.css index.js index.html index-local.html
  favicon.svg tree-icon-light.svg tree-icon-dark.svg
  README.md LICENSE
  updateOID.sh check.sh
  examples/*
"
mtn automate tags 'it.lapo.asn1js{,.*}' | \
  awk '/^revision/ { print substr($2, 2, length($2) - 2)}' | \
  while read rev; do
    mtn automate certs $rev | awk -v q='"' '
      $2 == q "date" q { rdate=NR+1 }
      $2 == q "tag" q { rtag=NR+1 }
      NR == rdate { date=substr($2, 2, 10) }
      NR == rtag { tag=substr($2, 2, length($2)-2) }
      END { print date " " tag }
    '
  done | sort -r | awk -v q='"' '
    BEGIN {
      print "export const tags = {"
    }
    { print "  " q $2 q ": " q $1 q "," }
    END { print "};" }
  ' > tags.js
chmod 644 examples/*
type gsha256sum >/dev/null 2>/dev/null && SHA256=gsha256sum || SHA256=sha256sum
pnpm build
cp dist/index.html index-local.html
$SHA256 -t $FILES | gpg --clearsign > sha256sums.asc
7z a -tzip -mx=9 asn1js.zip $FILES sha256sums.asc
rsync -Pvrtz asn1js.zip $FILES lapo.it:www/asn1js/

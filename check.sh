#!/bin/sh
sha256sum </dev/null >/dev/null 2>&1 && SHA256=sha256sum || SHA256=gsha256sum
gpg -o - sha256sums.asc | $SHA256 -c --quiet

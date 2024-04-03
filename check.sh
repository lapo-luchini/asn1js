#!/bin/sh
type gsha256sum >/dev/null 2>/dev/null && SHA256=gsha256sum || SHA256=sha256sum
gpg --verify -o - sha256sums.asc | $SHA256 -c --quiet

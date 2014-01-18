#!/bin/sh
gpg -o - sha256sums.asc | sha256sum -c --quiet

#!/bin/sh
cd `dirname "$0"`
mtn sy
if [ ! -d .git ]; then
    git init # --initial-branch=trunk # not yet supported on WSL
    git checkout -b trunk
    git remote add origin git@github.com:lapo-luchini/asn1js.git
    rm git-marks1.txt git-marks2.txt
fi
touch git-marks1.txt git-marks2.txt
[ -f git-authors.txt ] || echo 'lapo@lapo.it = Lapo Luchini <lapo@lapo.it>' > git-authors.txt
mtn ls branches --ignore-suspend-certs | sort -V | awk '
  NR == 1 { base = $0; len = length(base) }
  { d = length($0) - len; print $0 " = " (d > 0 ? substr($0, len+2) : "trunk") }
' > git-branches.txt
mtn --quiet --authors=git-authors.txt --branches-file=git-branches.txt --import-marks=git-marks1.txt --export-marks=git-marks1.txt git_export | \
    git fast-import --import-marks=git-marks2.txt --export-marks=git-marks2.txt
git push --mirror origin
git reset # to update working copy state (doesn't change files)

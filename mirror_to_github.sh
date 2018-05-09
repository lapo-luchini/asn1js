#!/bin/sh
cd `dirname "$0"`
if [ ! -d .git ]; then
    git init
    git remote add origin git@github.com:lapo-luchini/asn1js.git
fi
touch git-marks1.txt git-marks2.txt
mtn --quiet --authors=git-authors.txt --branches-file=git-branches.txt --import-marks=git-marks1.txt --export-marks=git-marks1.txt git_export | \
    git fast-import --import-marks=git-marks2.txt --export-marks=git-marks2.txt
git push --mirror origin

#/bin/sh
downloadRFC() {
    URL="https://www.ietf.org/rfc/rfc$1.txt"
    if [ -x /usr/bin/fetch ]; then
        /usr/bin/fetch -m --no-verify-peer $URL
    elif [ -x /usr/bin/wget ]; then
        /usr/bin/wget -N --no-check-certificate $URL
    elif [ ! -r dumpasn1.cfg ]; then
        echo Please download $URL in this directory.
        exit 1
    fi
}
echo '{}' > rfcasn1.json # start from scratch
mkdir -p rfc
for n in 5280 3369 3161; do
    ( cd rfc ; downloadRFC $n )
    ./parseRFC.js rfc/rfc$n.txt
done
echo Conversion completed.

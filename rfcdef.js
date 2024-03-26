// content parsed from ASN.1 definitions as found in the following RFCs: 5280 5208 3369 3161 2986 4211 4210
// Copyright (C) The IETF Trust (2008)
// as far as I can tell this file is allowed under the following clause:
//   It is acceptable under the current IETF rules (RFC 5378) to modify extracted code if necessary.
// https://trustee.ietf.org/about/faq/#reproducing-rfcs
export const rfcdef = {
  "1.3.6.1.5.5.7.0.18": {
    "name": "PKIX1Explicit88",
    "oid": "1.3.6.1.5.5.7.0.18",
    "source": "rfc5280.txt",
    "tagDefault": "EXPLICIT",
    "values": {
      "id-pkix": {
        "name": "id-pkix",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7"
      },
      "id-pe": {
        "name": "id-pe",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.1"
      },
      "id-qt": {
        "name": "id-qt",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.2"
      },
      "id-kp": {
        "name": "id-kp",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.3"
      },
      "id-ad": {
        "name": "id-ad",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.48"
      },
      "id-qt-cps": {
        "name": "id-qt-cps",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.2.1"
      },
      "id-qt-unotice": {
        "name": "id-qt-unotice",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.2.2"
      },
      "id-ad-ocsp": {
        "name": "id-ad-ocsp",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.48.1"
      },
      "id-ad-caIssuers": {
        "name": "id-ad-caIssuers",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.48.2"
      },
      "id-ad-timeStamping": {
        "name": "id-ad-timeStamping",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.48.3"
      },
      "id-ad-caRepository": {
        "name": "id-ad-caRepository",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.48.5"
      },
      "id-at": {
        "name": "id-at",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.4"
      },
      "id-at-name": {
        "name": "id-at-name",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.41"
      },
      "id-at-surname": {
        "name": "id-at-surname",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.4"
      },
      "id-at-givenName": {
        "name": "id-at-givenName",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.42"
      },
      "id-at-initials": {
        "name": "id-at-initials",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.43"
      },
      "id-at-generationQualifier": {
        "name": "id-at-generationQualifier",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.44"
      },
      "id-at-commonName": {
        "name": "id-at-commonName",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.3"
      },
      "id-at-localityName": {
        "name": "id-at-localityName",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.7"
      },
      "id-at-stateOrProvinceName": {
        "name": "id-at-stateOrProvinceName",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.8"
      },
      "id-at-organizationName": {
        "name": "id-at-organizationName",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.10"
      },
      "id-at-organizationalUnitName": {
        "name": "id-at-organizationalUnitName",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.11"
      },
      "id-at-title": {
        "name": "id-at-title",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.12"
      },
      "id-at-dnQualifier": {
        "name": "id-at-dnQualifier",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.46"
      },
      "id-at-countryName": {
        "name": "id-at-countryName",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.6"
      },
      "id-at-serialNumber": {
        "name": "id-at-serialNumber",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.5"
      },
      "id-at-pseudonym": {
        "name": "id-at-pseudonym",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "2.5.4.65"
      },
      "id-domainComponent": {
        "name": "id-domainComponent",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "0.9.2342.19200300.100.1.25"
      },
      "pkcs-9": {
        "name": "pkcs-9",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113549.1.9"
      },
      "id-emailAddress": {
        "name": "id-emailAddress",
        "type": {
          "name": "AttributeType",
          "type": "defined"
        },
        "value": "1.2.840.113549.1.9.1"
      },
      "common-name": {
        "name": "common-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 1
      },
      "teletex-common-name": {
        "name": "teletex-common-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 2
      },
      "teletex-organization-name": {
        "name": "teletex-organization-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 3
      },
      "teletex-personal-name": {
        "name": "teletex-personal-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 4
      },
      "teletex-organizational-unit-names": {
        "name": "teletex-organizational-unit-names",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 5
      },
      "pds-name": {
        "name": "pds-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 7
      },
      "physical-delivery-country-name": {
        "name": "physical-delivery-country-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 8
      },
      "postal-code": {
        "name": "postal-code",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 9
      },
      "physical-delivery-office-name": {
        "name": "physical-delivery-office-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 10
      },
      "physical-delivery-office-number": {
        "name": "physical-delivery-office-number",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 11
      },
      "extension-OR-address-components": {
        "name": "extension-OR-address-components",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 12
      },
      "physical-delivery-personal-name": {
        "name": "physical-delivery-personal-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 13
      },
      "physical-delivery-organization-name": {
        "name": "physical-delivery-organization-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 14
      },
      "extension-physical-delivery-address-components": {
        "name": "extension-physical-delivery-address-components",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 15
      },
      "unformatted-postal-address": {
        "name": "unformatted-postal-address",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 16
      },
      "street-address": {
        "name": "street-address",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 17
      },
      "post-office-box-address": {
        "name": "post-office-box-address",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 18
      },
      "poste-restante-address": {
        "name": "poste-restante-address",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 19
      },
      "unique-postal-name": {
        "name": "unique-postal-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 20
      },
      "local-postal-attributes": {
        "name": "local-postal-attributes",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 21
      },
      "extended-network-address": {
        "name": "extended-network-address",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 22
      },
      "terminal-type": {
        "name": "terminal-type",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 23
      },
      "teletex-domain-defined-attributes": {
        "name": "teletex-domain-defined-attributes",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 6
      },
      "ub-name": {
        "name": "ub-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 32768
      },
      "ub-common-name": {
        "name": "ub-common-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 64
      },
      "ub-locality-name": {
        "name": "ub-locality-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 128
      },
      "ub-state-name": {
        "name": "ub-state-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 128
      },
      "ub-organization-name": {
        "name": "ub-organization-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 64
      },
      "ub-organizational-unit-name": {
        "name": "ub-organizational-unit-name",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 64
      },
      "ub-title": {
        "name": "ub-title",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 64
      },
      "ub-serial-number": {
        "name": "ub-serial-number",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 64
      },
      "ub-match": {
        "name": "ub-match",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 128
      },
      "ub-emailaddress-length": {
        "name": "ub-emailaddress-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 255
      },
      "ub-common-name-length": {
        "name": "ub-common-name-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 64
      },
      "ub-country-name-alpha-length": {
        "name": "ub-country-name-alpha-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 2
      },
      "ub-country-name-numeric-length": {
        "name": "ub-country-name-numeric-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 3
      },
      "ub-domain-defined-attributes": {
        "name": "ub-domain-defined-attributes",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 4
      },
      "ub-domain-defined-attribute-type-length": {
        "name": "ub-domain-defined-attribute-type-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 8
      },
      "ub-domain-defined-attribute-value-length": {
        "name": "ub-domain-defined-attribute-value-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 128
      },
      "ub-domain-name-length": {
        "name": "ub-domain-name-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 16
      },
      "ub-extension-attributes": {
        "name": "ub-extension-attributes",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 256
      },
      "ub-e163-4-number-length": {
        "name": "ub-e163-4-number-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 15
      },
      "ub-e163-4-sub-address-length": {
        "name": "ub-e163-4-sub-address-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 40
      },
      "ub-generation-qualifier-length": {
        "name": "ub-generation-qualifier-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 3
      },
      "ub-given-name-length": {
        "name": "ub-given-name-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 16
      },
      "ub-initials-length": {
        "name": "ub-initials-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 5
      },
      "ub-integer-options": {
        "name": "ub-integer-options",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 256
      },
      "ub-numeric-user-id-length": {
        "name": "ub-numeric-user-id-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 32
      },
      "ub-organization-name-length": {
        "name": "ub-organization-name-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 64
      },
      "ub-organizational-unit-name-length": {
        "name": "ub-organizational-unit-name-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 32
      },
      "ub-organizational-units": {
        "name": "ub-organizational-units",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 4
      },
      "ub-pds-name-length": {
        "name": "ub-pds-name-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 16
      },
      "ub-pds-parameter-length": {
        "name": "ub-pds-parameter-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 30
      },
      "ub-pds-physical-address-lines": {
        "name": "ub-pds-physical-address-lines",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 6
      },
      "ub-postal-code-length": {
        "name": "ub-postal-code-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 16
      },
      "ub-pseudonym": {
        "name": "ub-pseudonym",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 128
      },
      "ub-surname-length": {
        "name": "ub-surname-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 40
      },
      "ub-terminal-id-length": {
        "name": "ub-terminal-id-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 24
      },
      "ub-unformatted-address-length": {
        "name": "ub-unformatted-address-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 180
      },
      "ub-x121-address-length": {
        "name": "ub-x121-address-length",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        },
        "value": 16
      }
    },
    "types": {
      "UniversalString": {
        "name": "UniversalString",
        "type": {
          "name": "[28]",
          "type": "tag",
          "class": "UNIVERSAL",
          "explicit": false,
          "content": [
            {
              "name": "",
              "type": {
                "name": "OCTET STRING",
                "type": "builtin"
              }
            }
          ]
        }
      },
      "BMPString": {
        "name": "BMPString",
        "type": {
          "name": "[30]",
          "type": "tag",
          "class": "UNIVERSAL",
          "explicit": false,
          "content": [
            {
              "name": "",
              "type": {
                "name": "OCTET STRING",
                "type": "builtin"
              }
            }
          ]
        }
      },
      "UTF8String": {
        "name": "UTF8String",
        "type": {
          "name": "[12]",
          "type": "tag",
          "class": "UNIVERSAL",
          "explicit": false,
          "content": [
            {
              "name": "",
              "type": {
                "name": "OCTET STRING",
                "type": "builtin"
              }
            }
          ]
        }
      },
      "Attribute": {
        "name": "Attribute",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "type",
              "name": "AttributeType",
              "type": "defined"
            },
            {
              "id": "values",
              "name": "SET",
              "type": "builtin",
              "typeOf": 1,
              "content": [
                {
                  "name": "AttributeValue",
                  "type": "defined"
                }
              ]
            }
          ]
        }
      },
      "AttributeType": {
        "name": "AttributeType",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        }
      },
      "AttributeValue": {
        "name": "AttributeValue",
        "type": {
          "name": "ANY",
          "type": "builtin"
        }
      },
      "AttributeTypeAndValue": {
        "name": "AttributeTypeAndValue",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "type",
              "name": "AttributeType",
              "type": "defined"
            },
            {
              "id": "value",
              "name": "AttributeValue",
              "type": "defined"
            }
          ]
        }
      },
      "X520name": {
        "name": "X520name",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "teletexString",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-name"
              ]
            },
            {
              "id": "printableString",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-name"
              ]
            },
            {
              "id": "universalString",
              "name": "UniversalString",
              "type": "builtin",
              "size": [
                1,
                "ub-name"
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                "ub-name"
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                "ub-name"
              ]
            }
          ]
        }
      },
      "X520CommonName": {
        "name": "X520CommonName",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "teletexString",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-common-name"
              ]
            },
            {
              "id": "printableString",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-common-name"
              ]
            },
            {
              "id": "universalString",
              "name": "UniversalString",
              "type": "builtin",
              "size": [
                1,
                "ub-common-name"
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                "ub-common-name"
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                "ub-common-name"
              ]
            }
          ]
        }
      },
      "X520LocalityName": {
        "name": "X520LocalityName",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "teletexString",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-locality-name"
              ]
            },
            {
              "id": "printableString",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-locality-name"
              ]
            },
            {
              "id": "universalString",
              "name": "UniversalString",
              "type": "builtin",
              "size": [
                1,
                "ub-locality-name"
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                "ub-locality-name"
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                "ub-locality-name"
              ]
            }
          ]
        }
      },
      "X520StateOrProvinceName": {
        "name": "X520StateOrProvinceName",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "teletexString",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-state-name"
              ]
            },
            {
              "id": "printableString",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-state-name"
              ]
            },
            {
              "id": "universalString",
              "name": "UniversalString",
              "type": "builtin",
              "size": [
                1,
                "ub-state-name"
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                "ub-state-name"
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                "ub-state-name"
              ]
            }
          ]
        }
      },
      "X520OrganizationName": {
        "name": "X520OrganizationName",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "teletexString",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-organization-name"
              ]
            },
            {
              "id": "printableString",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-organization-name"
              ]
            },
            {
              "id": "universalString",
              "name": "UniversalString",
              "type": "builtin",
              "size": [
                1,
                "ub-organization-name"
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                "ub-organization-name"
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                "ub-organization-name"
              ]
            }
          ]
        }
      },
      "X520OrganizationalUnitName": {
        "name": "X520OrganizationalUnitName",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "teletexString",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-organizational-unit-name"
              ]
            },
            {
              "id": "printableString",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-organizational-unit-name"
              ]
            },
            {
              "id": "universalString",
              "name": "UniversalString",
              "type": "builtin",
              "size": [
                1,
                "ub-organizational-unit-name"
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                "ub-organizational-unit-name"
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                "ub-organizational-unit-name"
              ]
            }
          ]
        }
      },
      "X520Title": {
        "name": "X520Title",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "teletexString",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-title"
              ]
            },
            {
              "id": "printableString",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-title"
              ]
            },
            {
              "id": "universalString",
              "name": "UniversalString",
              "type": "builtin",
              "size": [
                1,
                "ub-title"
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                "ub-title"
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                "ub-title"
              ]
            }
          ]
        }
      },
      "X520dnQualifier": {
        "name": "X520dnQualifier",
        "type": {
          "name": "PrintableString",
          "type": "builtin"
        }
      },
      "X520countryName": {
        "name": "X520countryName",
        "type": {
          "name": "PrintableString",
          "type": "builtin",
          "size": 2
        }
      },
      "X520SerialNumber": {
        "name": "X520SerialNumber",
        "type": {
          "name": "PrintableString",
          "type": "builtin",
          "size": [
            1,
            "ub-serial-number"
          ]
        }
      },
      "X520Pseudonym": {
        "name": "X520Pseudonym",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "teletexString",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-pseudonym"
              ]
            },
            {
              "id": "printableString",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-pseudonym"
              ]
            },
            {
              "id": "universalString",
              "name": "UniversalString",
              "type": "builtin",
              "size": [
                1,
                "ub-pseudonym"
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                "ub-pseudonym"
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                "ub-pseudonym"
              ]
            }
          ]
        }
      },
      "DomainComponent": {
        "name": "DomainComponent",
        "type": {
          "name": "IA5String",
          "type": "builtin"
        }
      },
      "EmailAddress": {
        "name": "EmailAddress",
        "type": {
          "name": "IA5String",
          "type": "builtin",
          "size": [
            1,
            "ub-emailaddress-length"
          ]
        }
      },
      "Name": {
        "name": "Name",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "rdnSequence",
              "name": "RDNSequence",
              "type": "defined"
            }
          ]
        }
      },
      "RDNSequence": {
        "name": "RDNSequence",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "RelativeDistinguishedName",
              "type": "defined"
            }
          ]
        }
      },
      "DistinguishedName": {
        "name": "DistinguishedName",
        "type": {
          "name": "RDNSequence",
          "type": "defined"
        }
      },
      "RelativeDistinguishedName": {
        "name": "RelativeDistinguishedName",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "AttributeTypeAndValue",
              "type": "defined"
            }
          ]
        }
      },
      "DirectoryString": {
        "name": "DirectoryString",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "teletexString",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "MAX"
              ]
            },
            {
              "id": "printableString",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "MAX"
              ]
            },
            {
              "id": "universalString",
              "name": "UniversalString",
              "type": "builtin",
              "size": [
                1,
                "MAX"
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                "MAX"
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                "MAX"
              ]
            }
          ]
        }
      },
      "Certificate": {
        "name": "Certificate",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "tbsCertificate",
              "name": "TBSCertificate",
              "type": "defined"
            },
            {
              "id": "signatureAlgorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "signature",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "TBSCertificate": {
        "name": "TBSCertificate",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Version",
                    "type": "defined"
                  }
                }
              ],
              "default": "v1"
            },
            {
              "id": "serialNumber",
              "name": "CertificateSerialNumber",
              "type": "defined"
            },
            {
              "id": "signature",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "issuer",
              "name": "Name",
              "type": "defined"
            },
            {
              "id": "validity",
              "name": "Validity",
              "type": "defined"
            },
            {
              "id": "subject",
              "name": "Name",
              "type": "defined"
            },
            {
              "id": "subjectPublicKeyInfo",
              "name": "SubjectPublicKeyInfo",
              "type": "defined"
            },
            {
              "id": "issuerUniqueID",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "UniqueIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "subjectUniqueID",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "UniqueIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "extensions",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Extensions",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "Version": {
        "name": "Version",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "content": {
            "v1": 0,
            "v2": 1,
            "v3": 2
          }
        }
      },
      "CertificateSerialNumber": {
        "name": "CertificateSerialNumber",
        "type": {
          "name": "INTEGER",
          "type": "builtin"
        }
      },
      "Validity": {
        "name": "Validity",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "notBefore",
              "name": "Time",
              "type": "defined"
            },
            {
              "id": "notAfter",
              "name": "Time",
              "type": "defined"
            }
          ]
        }
      },
      "Time": {
        "name": "Time",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "utcTime",
              "name": "UTCTime",
              "type": "builtin",
              "content": "TODO:unknown"
            },
            {
              "id": "generalTime",
              "name": "GeneralizedTime",
              "type": "builtin",
              "content": "TODO:unknown"
            }
          ]
        }
      },
      "UniqueIdentifier": {
        "name": "UniqueIdentifier",
        "type": {
          "name": "BIT STRING",
          "type": "builtin"
        }
      },
      "SubjectPublicKeyInfo": {
        "name": "SubjectPublicKeyInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "algorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "subjectPublicKey",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "Extensions": {
        "name": "Extensions",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "Extension",
              "type": "defined"
            }
          ]
        }
      },
      "Extension": {
        "name": "Extension",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "extnID",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "critical",
              "name": "BOOLEAN",
              "type": "builtin",
              "default": false
            },
            {
              "id": "extnValue",
              "name": "OCTET STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "CertificateList": {
        "name": "CertificateList",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "tbsCertList",
              "name": "TBSCertList",
              "type": "defined"
            },
            {
              "id": "signatureAlgorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "signature",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "TBSCertList": {
        "name": "TBSCertList",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "Version",
              "type": "defined",
              "optional": true
            },
            {
              "id": "signature",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "issuer",
              "name": "Name",
              "type": "defined"
            },
            {
              "id": "thisUpdate",
              "name": "Time",
              "type": "defined"
            },
            {
              "id": "nextUpdate",
              "name": "Time",
              "type": "defined",
              "optional": true
            },
            {
              "id": "revokedCertificates",
              "name": "SEQUENCE",
              "type": "builtin",
              "typeOf": 1,
              "content": [
                {
                  "name": "SEQUENCE",
                  "type": "builtin",
                  "content": [
                    {
                      "id": "userCertificate",
                      "name": "CertificateSerialNumber",
                      "type": "defined"
                    },
                    {
                      "id": "revocationDate",
                      "name": "Time",
                      "type": "defined"
                    },
                    {
                      "id": "crlEntryExtensions",
                      "name": "Extensions",
                      "type": "defined",
                      "optional": true
                    }
                  ]
                }
              ],
              "optional": true
            },
            {
              "id": "crlExtensions",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Extensions",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "AlgorithmIdentifier": {
        "name": "AlgorithmIdentifier",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "algorithm",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "parameters",
              "name": "ANY",
              "type": "builtin",
              "definedBy": "algorithm",
              "optional": true
            }
          ]
        }
      },
      "ORAddress": {
        "name": "ORAddress",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "built-in-standard-attributes",
              "name": "BuiltInStandardAttributes",
              "type": "defined"
            },
            {
              "id": "built-in-domain-defined-attributes",
              "name": "BuiltInDomainDefinedAttributes",
              "type": "defined",
              "optional": true
            },
            {
              "id": "extension-attributes",
              "name": "ExtensionAttributes",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "BuiltInStandardAttributes": {
        "name": "BuiltInStandardAttributes",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "country-name",
              "name": "CountryName",
              "type": "defined",
              "optional": true
            },
            {
              "id": "administration-domain-name",
              "name": "AdministrationDomainName",
              "type": "defined",
              "optional": true
            },
            {
              "id": "network-address",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "NetworkAddress",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "terminal-identifier",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "TerminalIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "private-domain-name",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PrivateDomainName",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "organization-name",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OrganizationName",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "numeric-user-identifier",
              "name": "[4]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "NumericUserIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "personal-name",
              "name": "[5]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PersonalName",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "organizational-unit-names",
              "name": "[6]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OrganizationalUnitNames",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "CountryName": {
        "name": "CountryName",
        "type": {
          "name": "[1]",
          "type": "tag",
          "class": "APPLICATION",
          "explicit": true,
          "content": [
            {
              "name": "",
              "type": {
                "name": "CHOICE",
                "type": "builtin",
                "content": [
                  {
                    "id": "x121-dcc-code",
                    "name": "NumericString",
                    "type": "builtin",
                    "size": "ub-country-name-numeric-length"
                  },
                  {
                    "id": "iso-3166-alpha2-code",
                    "name": "PrintableString",
                    "type": "builtin",
                    "size": "ub-country-name-alpha-length"
                  }
                ]
              }
            }
          ]
        }
      },
      "AdministrationDomainName": {
        "name": "AdministrationDomainName",
        "type": {
          "name": "[2]",
          "type": "tag",
          "class": "APPLICATION",
          "explicit": true,
          "content": [
            {
              "name": "",
              "type": {
                "name": "CHOICE",
                "type": "builtin",
                "content": [
                  {
                    "id": "numeric",
                    "name": "NumericString",
                    "type": "builtin",
                    "size": [
                      0,
                      "ub-domain-name-length"
                    ]
                  },
                  {
                    "id": "printable",
                    "name": "PrintableString",
                    "type": "builtin",
                    "size": [
                      0,
                      "ub-domain-name-length"
                    ]
                  }
                ]
              }
            }
          ]
        }
      },
      "NetworkAddress": {
        "name": "NetworkAddress",
        "type": {
          "name": "X121Address",
          "type": "defined"
        }
      },
      "X121Address": {
        "name": "X121Address",
        "type": {
          "name": "NumericString",
          "type": "builtin",
          "size": [
            1,
            "ub-x121-address-length"
          ]
        }
      },
      "TerminalIdentifier": {
        "name": "TerminalIdentifier",
        "type": {
          "name": "PrintableString",
          "type": "builtin",
          "size": [
            1,
            "ub-terminal-id-length"
          ]
        }
      },
      "PrivateDomainName": {
        "name": "PrivateDomainName",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "numeric",
              "name": "NumericString",
              "type": "builtin",
              "size": [
                1,
                "ub-domain-name-length"
              ]
            },
            {
              "id": "printable",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-domain-name-length"
              ]
            }
          ]
        }
      },
      "OrganizationName": {
        "name": "OrganizationName",
        "type": {
          "name": "PrintableString",
          "type": "builtin",
          "size": [
            1,
            "ub-organization-name-length"
          ]
        }
      },
      "NumericUserIdentifier": {
        "name": "NumericUserIdentifier",
        "type": {
          "name": "NumericString",
          "type": "builtin",
          "size": [
            1,
            "ub-numeric-user-id-length"
          ]
        }
      },
      "PersonalName": {
        "name": "PersonalName",
        "type": {
          "name": "SET",
          "type": "builtin",
          "content": [
            {
              "id": "surname",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PrintableString",
                    "type": "builtin",
                    "size": [
                      1,
                      "ub-surname-length"
                    ]
                  }
                }
              ]
            },
            {
              "id": "given-name",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PrintableString",
                    "type": "builtin",
                    "size": [
                      1,
                      "ub-given-name-length"
                    ]
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "initials",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PrintableString",
                    "type": "builtin",
                    "size": [
                      1,
                      "ub-initials-length"
                    ]
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "generation-qualifier",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PrintableString",
                    "type": "builtin",
                    "size": [
                      1,
                      "ub-generation-qualifier-length"
                    ]
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "OrganizationalUnitNames": {
        "name": "OrganizationalUnitNames",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "ub-organizational-units"
          ],
          "content": [
            {
              "name": "OrganizationalUnitName",
              "type": "defined"
            }
          ]
        }
      },
      "OrganizationalUnitName": {
        "name": "OrganizationalUnitName",
        "type": {
          "name": "PrintableString",
          "type": "builtin",
          "size": [
            1,
            "ub-organizational-unit-name-length"
          ]
        }
      },
      "BuiltInDomainDefinedAttributes": {
        "name": "BuiltInDomainDefinedAttributes",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "ub-domain-defined-attributes"
          ],
          "content": [
            {
              "name": "BuiltInDomainDefinedAttribute",
              "type": "defined"
            }
          ]
        }
      },
      "BuiltInDomainDefinedAttribute": {
        "name": "BuiltInDomainDefinedAttribute",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "type",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-domain-defined-attribute-type-length"
              ]
            },
            {
              "id": "value",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-domain-defined-attribute-value-length"
              ]
            }
          ]
        }
      },
      "ExtensionAttributes": {
        "name": "ExtensionAttributes",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "ub-extension-attributes"
          ],
          "content": [
            {
              "name": "ExtensionAttribute",
              "type": "defined"
            }
          ]
        }
      },
      "ExtensionAttribute": {
        "name": "ExtensionAttribute",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "extension-attribute-type",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "INTEGER",
                    "type": "builtin",
                    "range": [
                      0,
                      "ub-extension-attributes"
                    ]
                  }
                }
              ]
            },
            {
              "id": "extension-attribute-value",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "ANY",
                    "type": "builtin",
                    "definedBy": "extension-attribute-type"
                  }
                }
              ]
            }
          ]
        }
      },
      "CommonName": {
        "name": "CommonName",
        "type": {
          "name": "PrintableString",
          "type": "builtin",
          "size": [
            1,
            "ub-common-name-length"
          ]
        }
      },
      "TeletexCommonName": {
        "name": "TeletexCommonName",
        "type": {
          "name": "TeletexString",
          "type": "builtin",
          "size": [
            1,
            "ub-common-name-length"
          ]
        }
      },
      "TeletexOrganizationName": {
        "name": "TeletexOrganizationName",
        "type": {
          "name": "TeletexString",
          "type": "builtin",
          "size": [
            1,
            "ub-organization-name-length"
          ]
        }
      },
      "TeletexPersonalName": {
        "name": "TeletexPersonalName",
        "type": {
          "name": "SET",
          "type": "builtin",
          "content": [
            {
              "id": "surname",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "TeletexString",
                    "type": "builtin",
                    "size": [
                      1,
                      "ub-surname-length"
                    ]
                  }
                }
              ]
            },
            {
              "id": "given-name",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "TeletexString",
                    "type": "builtin",
                    "size": [
                      1,
                      "ub-given-name-length"
                    ]
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "initials",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "TeletexString",
                    "type": "builtin",
                    "size": [
                      1,
                      "ub-initials-length"
                    ]
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "generation-qualifier",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "TeletexString",
                    "type": "builtin",
                    "size": [
                      1,
                      "ub-generation-qualifier-length"
                    ]
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "TeletexOrganizationalUnitNames": {
        "name": "TeletexOrganizationalUnitNames",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "ub-organizational-units"
          ],
          "content": [
            {
              "name": "TeletexOrganizationalUnitName",
              "type": "defined"
            }
          ]
        }
      },
      "TeletexOrganizationalUnitName": {
        "name": "TeletexOrganizationalUnitName",
        "type": {
          "name": "TeletexString",
          "type": "builtin",
          "size": [
            1,
            "ub-organizational-unit-name-length"
          ]
        }
      },
      "PDSName": {
        "name": "PDSName",
        "type": {
          "name": "PrintableString",
          "type": "builtin",
          "size": [
            1,
            "ub-pds-name-length"
          ]
        }
      },
      "PhysicalDeliveryCountryName": {
        "name": "PhysicalDeliveryCountryName",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "x121-dcc-code",
              "name": "NumericString",
              "type": "builtin",
              "size": "ub-country-name-numeric-length"
            },
            {
              "id": "iso-3166-alpha2-code",
              "name": "PrintableString",
              "type": "builtin",
              "size": "ub-country-name-alpha-length"
            }
          ]
        }
      },
      "PostalCode": {
        "name": "PostalCode",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "numeric-code",
              "name": "NumericString",
              "type": "builtin",
              "size": [
                1,
                "ub-postal-code-length"
              ]
            },
            {
              "id": "printable-code",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-postal-code-length"
              ]
            }
          ]
        }
      },
      "PhysicalDeliveryOfficeName": {
        "name": "PhysicalDeliveryOfficeName",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "PhysicalDeliveryOfficeNumber": {
        "name": "PhysicalDeliveryOfficeNumber",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "ExtensionORAddressComponents": {
        "name": "ExtensionORAddressComponents",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "PhysicalDeliveryPersonalName": {
        "name": "PhysicalDeliveryPersonalName",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "PhysicalDeliveryOrganizationName": {
        "name": "PhysicalDeliveryOrganizationName",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "ExtensionPhysicalDeliveryAddressComponents": {
        "name": "ExtensionPhysicalDeliveryAddressComponents",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "UnformattedPostalAddress": {
        "name": "UnformattedPostalAddress",
        "type": {
          "name": "SET",
          "type": "builtin",
          "content": [
            {
              "id": "printable-address",
              "name": "SEQUENCE",
              "type": "builtin",
              "typeOf": 1,
              "size": [
                1,
                "ub-pds-physical-address-lines"
              ],
              "content": [
                {
                  "name": "PrintableString",
                  "type": "builtin",
                  "size": [
                    1,
                    "ub-pds-parameter-length"
                  ]
                }
              ],
              "optional": true
            },
            {
              "id": "teletex-string",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-unformatted-address-length"
              ],
              "optional": true
            }
          ]
        }
      },
      "StreetAddress": {
        "name": "StreetAddress",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "PostOfficeBoxAddress": {
        "name": "PostOfficeBoxAddress",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "PosteRestanteAddress": {
        "name": "PosteRestanteAddress",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "UniquePostalName": {
        "name": "UniquePostalName",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "LocalPostalAttributes": {
        "name": "LocalPostalAttributes",
        "type": {
          "name": "PDSParameter",
          "type": "defined"
        }
      },
      "PDSParameter": {
        "name": "PDSParameter",
        "type": {
          "name": "SET",
          "type": "builtin",
          "content": [
            {
              "id": "printable-string",
              "name": "PrintableString",
              "type": "builtin",
              "size": [
                1,
                "ub-pds-parameter-length"
              ],
              "optional": true
            },
            {
              "id": "teletex-string",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-pds-parameter-length"
              ],
              "optional": true
            }
          ]
        }
      },
      "ExtendedNetworkAddress": {
        "name": "ExtendedNetworkAddress",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "e163-4-address",
              "name": "SEQUENCE",
              "type": "builtin",
              "content": [
                {
                  "id": "number",
                  "name": "[0]",
                  "type": "tag",
                  "class": "CONTEXT",
                  "explicit": false,
                  "content": [
                    {
                      "name": "",
                      "type": {
                        "name": "NumericString",
                        "type": "builtin",
                        "size": [
                          1,
                          "ub-e163-4-number-length"
                        ]
                      }
                    }
                  ]
                },
                {
                  "id": "sub-address",
                  "name": "[1]",
                  "type": "tag",
                  "class": "CONTEXT",
                  "explicit": false,
                  "content": [
                    {
                      "name": "",
                      "type": {
                        "name": "NumericString",
                        "type": "builtin",
                        "size": [
                          1,
                          "ub-e163-4-sub-address-length"
                        ]
                      }
                    }
                  ],
                  "optional": true
                }
              ]
            },
            {
              "id": "psap-address",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PresentationAddress",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "PresentationAddress": {
        "name": "PresentationAddress",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "pSelector",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OCTET STRING",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "sSelector",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OCTET STRING",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "tSelector",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OCTET STRING",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "nAddresses",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SET",
                    "type": "builtin",
                    "typeOf": 1,
                    "size": [
                      1,
                      "MAX"
                    ],
                    "content": [
                      {
                        "name": "OCTET STRING",
                        "type": "builtin"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      },
      "TerminalType": {
        "name": "TerminalType",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "content": {
            "telex": 3,
            "teletex": 4,
            "g3-facsimile": 5,
            "g4-facsimile": 6,
            "ia5-terminal": 7,
            "videotex": 8
          }
        }
      },
      "TeletexDomainDefinedAttributes": {
        "name": "TeletexDomainDefinedAttributes",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "ub-domain-defined-attributes"
          ],
          "content": [
            {
              "name": "TeletexDomainDefinedAttribute",
              "type": "defined"
            }
          ]
        }
      },
      "TeletexDomainDefinedAttribute": {
        "name": "TeletexDomainDefinedAttribute",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "type",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-domain-defined-attribute-type-length"
              ]
            },
            {
              "id": "value",
              "name": "TeletexString",
              "type": "builtin",
              "size": [
                1,
                "ub-domain-defined-attribute-value-length"
              ]
            }
          ]
        }
      }
    }
  },
  "1.3.6.1.5.5.7.0.19": {
    "name": "PKIX1Implicit88",
    "oid": "1.3.6.1.5.5.7.0.19",
    "source": "rfc5280.txt",
    "tagDefault": "IMPLICIT",
    "imports": {
      "1.3.6.1.5.5.7.0.18": {
        "name": "PKIX1Explicit88",
        "oid": "1.3.6.1.5.5.7.0.18",
        "types": [
          "id-pe",
          "id-kp",
          "id-qt-unotice",
          "id-qt-cps",
          "BMPString",
          "UTF8String",
          "ORAddress",
          "Name",
          "RelativeDistinguishedName",
          "CertificateSerialNumber",
          "Attribute",
          "DirectoryString"
        ]
      }
    },
    "values": {
      "id-ce": {
        "name": "id-ce",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29"
      },
      "id-ce-authorityKeyIdentifier": {
        "name": "id-ce-authorityKeyIdentifier",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.35"
      },
      "id-ce-subjectKeyIdentifier": {
        "name": "id-ce-subjectKeyIdentifier",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.14"
      },
      "id-ce-keyUsage": {
        "name": "id-ce-keyUsage",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.15"
      },
      "id-ce-privateKeyUsagePeriod": {
        "name": "id-ce-privateKeyUsagePeriod",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.16"
      },
      "id-ce-certificatePolicies": {
        "name": "id-ce-certificatePolicies",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.32"
      },
      "anyPolicy": {
        "name": "anyPolicy",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.32.0"
      },
      "id-ce-policyMappings": {
        "name": "id-ce-policyMappings",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.33"
      },
      "id-ce-subjectAltName": {
        "name": "id-ce-subjectAltName",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.17"
      },
      "id-ce-issuerAltName": {
        "name": "id-ce-issuerAltName",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.18"
      },
      "id-ce-subjectDirectoryAttributes": {
        "name": "id-ce-subjectDirectoryAttributes",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.9"
      },
      "id-ce-basicConstraints": {
        "name": "id-ce-basicConstraints",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.19"
      },
      "id-ce-nameConstraints": {
        "name": "id-ce-nameConstraints",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.30"
      },
      "id-ce-policyConstraints": {
        "name": "id-ce-policyConstraints",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.36"
      },
      "id-ce-cRLDistributionPoints": {
        "name": "id-ce-cRLDistributionPoints",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.31"
      },
      "id-ce-extKeyUsage": {
        "name": "id-ce-extKeyUsage",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.37"
      },
      "anyExtendedKeyUsage": {
        "name": "anyExtendedKeyUsage",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.37.0"
      },
      "id-kp-serverAuth": {
        "name": "id-kp-serverAuth",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "[object Object].1"
      },
      "id-kp-clientAuth": {
        "name": "id-kp-clientAuth",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "[object Object].2"
      },
      "id-kp-codeSigning": {
        "name": "id-kp-codeSigning",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "[object Object].3"
      },
      "id-kp-emailProtection": {
        "name": "id-kp-emailProtection",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "[object Object].4"
      },
      "id-kp-timeStamping": {
        "name": "id-kp-timeStamping",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "[object Object].8"
      },
      "id-kp-OCSPSigning": {
        "name": "id-kp-OCSPSigning",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "[object Object].9"
      },
      "id-ce-inhibitAnyPolicy": {
        "name": "id-ce-inhibitAnyPolicy",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.54"
      },
      "id-ce-freshestCRL": {
        "name": "id-ce-freshestCRL",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.46"
      },
      "id-pe-authorityInfoAccess": {
        "name": "id-pe-authorityInfoAccess",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "[object Object].1"
      },
      "id-pe-subjectInfoAccess": {
        "name": "id-pe-subjectInfoAccess",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "[object Object].11"
      },
      "id-ce-cRLNumber": {
        "name": "id-ce-cRLNumber",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.20"
      },
      "id-ce-issuingDistributionPoint": {
        "name": "id-ce-issuingDistributionPoint",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.28"
      },
      "id-ce-deltaCRLIndicator": {
        "name": "id-ce-deltaCRLIndicator",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.27"
      },
      "id-ce-cRLReasons": {
        "name": "id-ce-cRLReasons",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.21"
      },
      "id-ce-certificateIssuer": {
        "name": "id-ce-certificateIssuer",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.29"
      },
      "id-ce-holdInstructionCode": {
        "name": "id-ce-holdInstructionCode",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.23"
      },
      "holdInstruction": {
        "name": "holdInstruction",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.2.840.10040.2"
      },
      "id-holdinstruction-none": {
        "name": "id-holdinstruction-none",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.2.840.10040.2.1"
      },
      "id-holdinstruction-callissuer": {
        "name": "id-holdinstruction-callissuer",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.2.840.10040.2.2"
      },
      "id-holdinstruction-reject": {
        "name": "id-holdinstruction-reject",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.2.840.10040.2.3"
      },
      "id-ce-invalidityDate": {
        "name": "id-ce-invalidityDate",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "2.5.29.24"
      }
    },
    "types": {
      "AuthorityKeyIdentifier": {
        "name": "AuthorityKeyIdentifier",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "keyIdentifier",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "KeyIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "authorityCertIssuer",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GeneralNames",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "authorityCertSerialNumber",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertificateSerialNumber",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "KeyIdentifier": {
        "name": "KeyIdentifier",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "SubjectKeyIdentifier": {
        "name": "SubjectKeyIdentifier",
        "type": {
          "name": "KeyIdentifier",
          "type": "defined"
        }
      },
      "KeyUsage": {
        "name": "KeyUsage",
        "type": {
          "name": "BIT STRING",
          "type": "builtin",
          "content": {
            "digitalSignature": 0,
            "nonRepudiation": 1,
            "keyEncipherment": 2,
            "dataEncipherment": 3,
            "keyAgreement": 4,
            "keyCertSign": 5,
            "cRLSign": 6,
            "encipherOnly": 7,
            "decipherOnly": 8
          }
        }
      },
      "PrivateKeyUsagePeriod": {
        "name": "PrivateKeyUsagePeriod",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "notBefore",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GeneralizedTime",
                    "type": "builtin",
                    "content": "TODO:unknown"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "notAfter",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GeneralizedTime",
                    "type": "builtin",
                    "content": "TODO:unknown"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "CertificatePolicies": {
        "name": "CertificatePolicies",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "PolicyInformation",
              "type": "defined"
            }
          ]
        }
      },
      "PolicyInformation": {
        "name": "PolicyInformation",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "policyIdentifier",
              "name": "CertPolicyId",
              "type": "defined"
            },
            {
              "id": "policyQualifiers",
              "name": "SEQUENCE",
              "type": "builtin",
              "typeOf": 1,
              "size": [
                1,
                "MAX"
              ],
              "content": [
                {
                  "name": "PolicyQualifierInfo",
                  "type": "defined"
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "CertPolicyId": {
        "name": "CertPolicyId",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        }
      },
      "PolicyQualifierInfo": {
        "name": "PolicyQualifierInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "policyQualifierId",
              "name": "PolicyQualifierId",
              "type": "defined"
            },
            {
              "id": "qualifier",
              "name": "ANY",
              "type": "builtin",
              "definedBy": "policyQualifierId"
            }
          ]
        }
      },
      "PolicyQualifierId": {
        "name": "PolicyQualifierId",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        }
      },
      "CPSuri": {
        "name": "CPSuri",
        "type": {
          "name": "IA5String",
          "type": "builtin"
        }
      },
      "UserNotice": {
        "name": "UserNotice",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "noticeRef",
              "name": "NoticeReference",
              "type": "defined",
              "optional": true
            },
            {
              "id": "explicitText",
              "name": "DisplayText",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "NoticeReference": {
        "name": "NoticeReference",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "organization",
              "name": "DisplayText",
              "type": "defined"
            },
            {
              "id": "noticeNumbers",
              "name": "SEQUENCE",
              "type": "builtin",
              "typeOf": 1,
              "content": [
                {
                  "name": "INTEGER",
                  "type": "builtin"
                }
              ]
            }
          ]
        }
      },
      "DisplayText": {
        "name": "DisplayText",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "ia5String",
              "name": "IA5String",
              "type": "builtin",
              "size": [
                1,
                200
              ]
            },
            {
              "id": "visibleString",
              "name": "VisibleString",
              "type": "builtin",
              "size": [
                1,
                200
              ]
            },
            {
              "id": "bmpString",
              "name": "BMPString",
              "type": "builtin",
              "size": [
                1,
                200
              ]
            },
            {
              "id": "utf8String",
              "name": "UTF8String",
              "type": "builtin",
              "size": [
                1,
                200
              ]
            }
          ]
        }
      },
      "PolicyMappings": {
        "name": "PolicyMappings",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "SEQUENCE",
              "type": "builtin",
              "content": [
                {
                  "id": "issuerDomainPolicy",
                  "name": "CertPolicyId",
                  "type": "defined"
                },
                {
                  "id": "subjectDomainPolicy",
                  "name": "CertPolicyId",
                  "type": "defined"
                }
              ]
            }
          ]
        }
      },
      "SubjectAltName": {
        "name": "SubjectAltName",
        "type": {
          "name": "GeneralNames",
          "type": "defined"
        }
      },
      "GeneralNames": {
        "name": "GeneralNames",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "GeneralName",
              "type": "defined"
            }
          ]
        }
      },
      "GeneralName": {
        "name": "GeneralName",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "otherName",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AnotherName",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "rfc822Name",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "IA5String",
                    "type": "builtin"
                  }
                }
              ]
            },
            {
              "id": "dNSName",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "IA5String",
                    "type": "builtin"
                  }
                }
              ]
            },
            {
              "id": "x400Address",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "ORAddress",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "directoryName",
              "name": "[4]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Name",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "ediPartyName",
              "name": "[5]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "EDIPartyName",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "uniformResourceIdentifier",
              "name": "[6]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "IA5String",
                    "type": "builtin"
                  }
                }
              ]
            },
            {
              "id": "iPAddress",
              "name": "[7]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OCTET STRING",
                    "type": "builtin"
                  }
                }
              ]
            },
            {
              "id": "registeredID",
              "name": "[8]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OBJECT IDENTIFIER",
                    "type": "builtin"
                  }
                }
              ]
            }
          ]
        }
      },
      "AnotherName": {
        "name": "AnotherName",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "type-id",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "value",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "ANY",
                    "type": "builtin",
                    "definedBy": "type-id"
                  }
                }
              ]
            }
          ]
        }
      },
      "EDIPartyName": {
        "name": "EDIPartyName",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "nameAssigner",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "DirectoryString",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "partyName",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "DirectoryString",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "IssuerAltName": {
        "name": "IssuerAltName",
        "type": {
          "name": "GeneralNames",
          "type": "defined"
        }
      },
      "SubjectDirectoryAttributes": {
        "name": "SubjectDirectoryAttributes",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "Attribute",
              "type": "defined"
            }
          ]
        }
      },
      "BasicConstraints": {
        "name": "BasicConstraints",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "cA",
              "name": "BOOLEAN",
              "type": "builtin",
              "default": false
            },
            {
              "id": "pathLenConstraint",
              "name": "INTEGER",
              "type": "builtin",
              "range": [
                0,
                "MAX"
              ],
              "optional": true
            }
          ]
        }
      },
      "NameConstraints": {
        "name": "NameConstraints",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "permittedSubtrees",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GeneralSubtrees",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "excludedSubtrees",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GeneralSubtrees",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "GeneralSubtrees": {
        "name": "GeneralSubtrees",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "GeneralSubtree",
              "type": "defined"
            }
          ]
        }
      },
      "GeneralSubtree": {
        "name": "GeneralSubtree",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "base",
              "name": "GeneralName",
              "type": "defined"
            },
            {
              "id": "minimum",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BaseDistance",
                    "type": "defined"
                  }
                }
              ],
              "default": 0
            },
            {
              "id": "maximum",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BaseDistance",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "BaseDistance": {
        "name": "BaseDistance",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "range": [
            0,
            "MAX"
          ]
        }
      },
      "PolicyConstraints": {
        "name": "PolicyConstraints",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "requireExplicitPolicy",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SkipCerts",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "inhibitPolicyMapping",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SkipCerts",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "SkipCerts": {
        "name": "SkipCerts",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "range": [
            0,
            "MAX"
          ]
        }
      },
      "CRLDistributionPoints": {
        "name": "CRLDistributionPoints",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "DistributionPoint",
              "type": "defined"
            }
          ]
        }
      },
      "DistributionPoint": {
        "name": "DistributionPoint",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "distributionPoint",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "DistributionPointName",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "reasons",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "ReasonFlags",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "cRLIssuer",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GeneralNames",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "DistributionPointName": {
        "name": "DistributionPointName",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "fullName",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GeneralNames",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "nameRelativeToCRLIssuer",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "RelativeDistinguishedName",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "ReasonFlags": {
        "name": "ReasonFlags",
        "type": {
          "name": "BIT STRING",
          "type": "builtin",
          "content": {
            "unused": 0,
            "keyCompromise": 1,
            "cACompromise": 2,
            "affiliationChanged": 3,
            "superseded": 4,
            "cessationOfOperation": 5,
            "certificateHold": 6,
            "privilegeWithdrawn": 7,
            "aACompromise": 8
          }
        }
      },
      "ExtKeyUsageSyntax": {
        "name": "ExtKeyUsageSyntax",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "KeyPurposeId",
              "type": "defined"
            }
          ]
        }
      },
      "KeyPurposeId": {
        "name": "KeyPurposeId",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        }
      },
      "InhibitAnyPolicy": {
        "name": "InhibitAnyPolicy",
        "type": {
          "name": "SkipCerts",
          "type": "defined"
        }
      },
      "FreshestCRL": {
        "name": "FreshestCRL",
        "type": {
          "name": "CRLDistributionPoints",
          "type": "defined"
        }
      },
      "AuthorityInfoAccessSyntax": {
        "name": "AuthorityInfoAccessSyntax",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "AccessDescription",
              "type": "defined"
            }
          ]
        }
      },
      "AccessDescription": {
        "name": "AccessDescription",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "accessMethod",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "accessLocation",
              "name": "GeneralName",
              "type": "defined"
            }
          ]
        }
      },
      "SubjectInfoAccessSyntax": {
        "name": "SubjectInfoAccessSyntax",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "AccessDescription",
              "type": "defined"
            }
          ]
        }
      },
      "CRLNumber": {
        "name": "CRLNumber",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "range": [
            0,
            "MAX"
          ]
        }
      },
      "IssuingDistributionPoint": {
        "name": "IssuingDistributionPoint",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "distributionPoint",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "DistributionPointName",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "onlyContainsUserCerts",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BOOLEAN",
                    "type": "builtin"
                  }
                }
              ],
              "default": false
            },
            {
              "id": "onlyContainsCACerts",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BOOLEAN",
                    "type": "builtin"
                  }
                }
              ],
              "default": false
            },
            {
              "id": "onlySomeReasons",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "ReasonFlags",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "indirectCRL",
              "name": "[4]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BOOLEAN",
                    "type": "builtin"
                  }
                }
              ],
              "default": false
            },
            {
              "id": "onlyContainsAttributeCerts",
              "name": "[5]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BOOLEAN",
                    "type": "builtin"
                  }
                }
              ],
              "default": false
            }
          ]
        }
      },
      "BaseCRLNumber": {
        "name": "BaseCRLNumber",
        "type": {
          "name": "CRLNumber",
          "type": "defined"
        }
      },
      "CRLReason": {
        "name": "CRLReason",
        "type": {
          "name": "ENUMERATED",
          "type": "builtin",
          "content": {
            "unspecified": 0,
            "keyCompromise": 1,
            "cACompromise": 2,
            "affiliationChanged": 3,
            "superseded": 4,
            "cessationOfOperation": 5,
            "certificateHold": 6,
            "removeFromCRL": 8,
            "privilegeWithdrawn": 9,
            "aACompromise": 10
          }
        }
      },
      "CertificateIssuer": {
        "name": "CertificateIssuer",
        "type": {
          "name": "GeneralNames",
          "type": "defined"
        }
      },
      "HoldInstructionCode": {
        "name": "HoldInstructionCode",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        }
      },
      "InvalidityDate": {
        "name": "InvalidityDate",
        "type": {
          "name": "GeneralizedTime",
          "type": "builtin",
          "content": "TODO:unknown"
        }
      }
    }
  },
  "1.2.840.113549.1.8.1.1": {
    "name": "PKCS-8",
    "oid": "1.2.840.113549.1.8.1.1",
    "source": "rfc5208.txt",
    "tagDefault": "IMPLICIT",
    "imports": {
      "2.5.1.0.3": {
        "name": "InformationFramework",
        "oid": "2.5.1.0.3",
        "types": [
          "Attribute"
        ]
      },
      "1.2.840.113549.1.5.16.1": {
        "name": "PKCS-5",
        "oid": "1.2.840.113549.1.5.16.1",
        "types": [
          "AlgorithmIdentifier",
          "ALGORITHM-IDENTIFIER"
        ]
      }
    },
    "values": {
      "PrivateKeyAlgorithms": {
        "name": "PrivateKeyAlgorithms",
        "type": {
          "name": "ALGORITHM-IDENTIFIER",
          "type": "defined"
        },
        "value": ""
      },
      "KeyEncryptionAlgorithms": {
        "name": "KeyEncryptionAlgorithms",
        "type": {
          "name": "ALGORITHM-IDENTIFIER",
          "type": "defined"
        },
        "value": ""
      }
    },
    "types": {
      "PrivateKeyInfo": {
        "name": "PrivateKeyInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "Version",
              "type": "defined"
            },
            {
              "id": "privateKeyAlgorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "privateKey",
              "name": "PrivateKey",
              "type": "defined"
            },
            {
              "id": "attributes",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Attributes",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "Version": {
        "name": "Version",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "content": {
            "v1": 0
          }
        }
      },
      "PrivateKey": {
        "name": "PrivateKey",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "Attributes": {
        "name": "Attributes",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "Attribute",
              "type": "defined"
            }
          ]
        }
      },
      "EncryptedPrivateKeyInfo": {
        "name": "EncryptedPrivateKeyInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "encryptionAlgorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "encryptedData",
              "name": "EncryptedData",
              "type": "defined"
            }
          ]
        }
      },
      "EncryptedData": {
        "name": "EncryptedData",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      }
    }
  },
  "1.2.840.113549.1.9.16.0.14": {
    "name": "CryptographicMessageSyntax",
    "oid": "1.2.840.113549.1.9.16.0.14",
    "source": "rfc3369.txt",
    "tagDefault": "IMPLICIT",
    "imports": {
      "1.3.6.1.5.5.7.0.18": {
        "name": "PKIX1Explicit88",
        "oid": "1.3.6.1.5.5.7.0.18",
        "types": [
          "AlgorithmIdentifier",
          "Certificate",
          "CertificateList",
          "CertificateSerialNumber",
          "Name"
        ]
      },
      "1.3.6.1.5.5.7.0.12": {
        "name": "PKIXAttributeCertificate",
        "oid": "1.3.6.1.5.5.7.0.12",
        "types": [
          "AttributeCertificate"
        ]
      },
      "1.2.840.113549.1.9.16.0.15": {
        "name": "AttributeCertificateVersion1",
        "oid": "1.2.840.113549.1.9.16.0.15",
        "types": [
          "AttributeCertificateV1"
        ]
      }
    },
    "values": {
      "id-contentType": {
        "name": "id-contentType",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113549.1.9.3"
      },
      "id-messageDigest": {
        "name": "id-messageDigest",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113549.1.9.4"
      },
      "id-signingTime": {
        "name": "id-signingTime",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113549.1.9.5"
      },
      "id-countersignature": {
        "name": "id-countersignature",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113549.1.9.6"
      }
    },
    "types": {
      "ContentInfo": {
        "name": "ContentInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "contentType",
              "name": "ContentType",
              "type": "defined"
            },
            {
              "id": "content",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "ANY",
                    "type": "builtin",
                    "definedBy": "contentType"
                  }
                }
              ]
            }
          ]
        }
      },
      "ContentType": {
        "name": "ContentType",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        }
      },
      "SignedData": {
        "name": "SignedData",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "digestAlgorithms",
              "name": "DigestAlgorithmIdentifiers",
              "type": "defined"
            },
            {
              "id": "encapContentInfo",
              "name": "EncapsulatedContentInfo",
              "type": "defined"
            },
            {
              "id": "certificates",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertificateSet",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "crls",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertificateRevocationLists",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "signerInfos",
              "name": "SignerInfos",
              "type": "defined"
            }
          ]
        }
      },
      "DigestAlgorithmIdentifiers": {
        "name": "DigestAlgorithmIdentifiers",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "DigestAlgorithmIdentifier",
              "type": "defined"
            }
          ]
        }
      },
      "SignerInfos": {
        "name": "SignerInfos",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "SignerInfo",
              "type": "defined"
            }
          ]
        }
      },
      "EncapsulatedContentInfo": {
        "name": "EncapsulatedContentInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "eContentType",
              "name": "ContentType",
              "type": "defined"
            },
            {
              "id": "eContent",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OCTET STRING",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "SignerInfo": {
        "name": "SignerInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "sid",
              "name": "SignerIdentifier",
              "type": "defined"
            },
            {
              "id": "digestAlgorithm",
              "name": "DigestAlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "signedAttrs",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SignedAttributes",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "signatureAlgorithm",
              "name": "SignatureAlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "signature",
              "name": "SignatureValue",
              "type": "defined"
            },
            {
              "id": "unsignedAttrs",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "UnsignedAttributes",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "SignerIdentifier": {
        "name": "SignerIdentifier",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "issuerAndSerialNumber",
              "name": "IssuerAndSerialNumber",
              "type": "defined"
            },
            {
              "id": "subjectKeyIdentifier",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SubjectKeyIdentifier",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "SignedAttributes": {
        "name": "SignedAttributes",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "Attribute",
              "type": "defined"
            }
          ]
        }
      },
      "UnsignedAttributes": {
        "name": "UnsignedAttributes",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "Attribute",
              "type": "defined"
            }
          ]
        }
      },
      "Attribute": {
        "name": "Attribute",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "attrType",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "attrValues",
              "name": "SET",
              "type": "builtin",
              "typeOf": 1,
              "content": [
                {
                  "name": "AttributeValue",
                  "type": "defined"
                }
              ]
            }
          ]
        }
      },
      "AttributeValue": {
        "name": "AttributeValue",
        "type": {
          "name": "ANY",
          "type": "builtin"
        }
      },
      "SignatureValue": {
        "name": "SignatureValue",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "EnvelopedData": {
        "name": "EnvelopedData",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "originatorInfo",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OriginatorInfo",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "recipientInfos",
              "name": "RecipientInfos",
              "type": "defined"
            },
            {
              "id": "encryptedContentInfo",
              "name": "EncryptedContentInfo",
              "type": "defined"
            },
            {
              "id": "unprotectedAttrs",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "UnprotectedAttributes",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "OriginatorInfo": {
        "name": "OriginatorInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "certs",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertificateSet",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "crls",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertificateRevocationLists",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "RecipientInfos": {
        "name": "RecipientInfos",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "RecipientInfo",
              "type": "defined"
            }
          ]
        }
      },
      "EncryptedContentInfo": {
        "name": "EncryptedContentInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "contentType",
              "name": "ContentType",
              "type": "defined"
            },
            {
              "id": "contentEncryptionAlgorithm",
              "name": "ContentEncryptionAlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "encryptedContent",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "EncryptedContent",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "EncryptedContent": {
        "name": "EncryptedContent",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "UnprotectedAttributes": {
        "name": "UnprotectedAttributes",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "Attribute",
              "type": "defined"
            }
          ]
        }
      },
      "RecipientInfo": {
        "name": "RecipientInfo",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "ktri",
              "name": "KeyTransRecipientInfo",
              "type": "defined"
            },
            {
              "id": "kari",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "KeyAgreeRecipientInfo",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "kekri",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "KEKRecipientInfo",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "pwri",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PasswordRecipientInfo",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "ori",
              "name": "[4]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OtherRecipientInfo",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "EncryptedKey": {
        "name": "EncryptedKey",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "KeyTransRecipientInfo": {
        "name": "KeyTransRecipientInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "rid",
              "name": "RecipientIdentifier",
              "type": "defined"
            },
            {
              "id": "keyEncryptionAlgorithm",
              "name": "KeyEncryptionAlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "encryptedKey",
              "name": "EncryptedKey",
              "type": "defined"
            }
          ]
        }
      },
      "RecipientIdentifier": {
        "name": "RecipientIdentifier",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "issuerAndSerialNumber",
              "name": "IssuerAndSerialNumber",
              "type": "defined"
            },
            {
              "id": "subjectKeyIdentifier",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SubjectKeyIdentifier",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "KeyAgreeRecipientInfo": {
        "name": "KeyAgreeRecipientInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "originator",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OriginatorIdentifierOrKey",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "ukm",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "UserKeyingMaterial",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "keyEncryptionAlgorithm",
              "name": "KeyEncryptionAlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "recipientEncryptedKeys",
              "name": "RecipientEncryptedKeys",
              "type": "defined"
            }
          ]
        }
      },
      "OriginatorIdentifierOrKey": {
        "name": "OriginatorIdentifierOrKey",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "issuerAndSerialNumber",
              "name": "IssuerAndSerialNumber",
              "type": "defined"
            },
            {
              "id": "subjectKeyIdentifier",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SubjectKeyIdentifier",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "originatorKey",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OriginatorPublicKey",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "OriginatorPublicKey": {
        "name": "OriginatorPublicKey",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "algorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "publicKey",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "RecipientEncryptedKeys": {
        "name": "RecipientEncryptedKeys",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "RecipientEncryptedKey",
              "type": "defined"
            }
          ]
        }
      },
      "RecipientEncryptedKey": {
        "name": "RecipientEncryptedKey",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "rid",
              "name": "KeyAgreeRecipientIdentifier",
              "type": "defined"
            },
            {
              "id": "encryptedKey",
              "name": "EncryptedKey",
              "type": "defined"
            }
          ]
        }
      },
      "KeyAgreeRecipientIdentifier": {
        "name": "KeyAgreeRecipientIdentifier",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "issuerAndSerialNumber",
              "name": "IssuerAndSerialNumber",
              "type": "defined"
            },
            {
              "id": "rKeyId",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "RecipientKeyIdentifier",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "RecipientKeyIdentifier": {
        "name": "RecipientKeyIdentifier",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "subjectKeyIdentifier",
              "name": "SubjectKeyIdentifier",
              "type": "defined"
            },
            {
              "id": "date",
              "name": "GeneralizedTime",
              "type": "builtin",
              "content": "TODO:unknown",
              "optional": true
            },
            {
              "id": "other",
              "name": "OtherKeyAttribute",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "SubjectKeyIdentifier": {
        "name": "SubjectKeyIdentifier",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "KEKRecipientInfo": {
        "name": "KEKRecipientInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "kekid",
              "name": "KEKIdentifier",
              "type": "defined"
            },
            {
              "id": "keyEncryptionAlgorithm",
              "name": "KeyEncryptionAlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "encryptedKey",
              "name": "EncryptedKey",
              "type": "defined"
            }
          ]
        }
      },
      "KEKIdentifier": {
        "name": "KEKIdentifier",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "keyIdentifier",
              "name": "OCTET STRING",
              "type": "builtin"
            },
            {
              "id": "date",
              "name": "GeneralizedTime",
              "type": "builtin",
              "content": "TODO:unknown",
              "optional": true
            },
            {
              "id": "other",
              "name": "OtherKeyAttribute",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "PasswordRecipientInfo": {
        "name": "PasswordRecipientInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "keyDerivationAlgorithm",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "KeyDerivationAlgorithmIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "keyEncryptionAlgorithm",
              "name": "KeyEncryptionAlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "encryptedKey",
              "name": "EncryptedKey",
              "type": "defined"
            }
          ]
        }
      },
      "OtherRecipientInfo": {
        "name": "OtherRecipientInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "oriType",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "oriValue",
              "name": "ANY",
              "type": "builtin",
              "definedBy": "oriType"
            }
          ]
        }
      },
      "DigestedData": {
        "name": "DigestedData",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "digestAlgorithm",
              "name": "DigestAlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "encapContentInfo",
              "name": "EncapsulatedContentInfo",
              "type": "defined"
            },
            {
              "id": "digest",
              "name": "Digest",
              "type": "defined"
            }
          ]
        }
      },
      "Digest": {
        "name": "Digest",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "EncryptedData": {
        "name": "EncryptedData",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "encryptedContentInfo",
              "name": "EncryptedContentInfo",
              "type": "defined"
            },
            {
              "id": "unprotectedAttrs",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "UnprotectedAttributes",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "AuthenticatedData": {
        "name": "AuthenticatedData",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "originatorInfo",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OriginatorInfo",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "recipientInfos",
              "name": "RecipientInfos",
              "type": "defined"
            },
            {
              "id": "macAlgorithm",
              "name": "MessageAuthenticationCodeAlgorithm",
              "type": "defined"
            },
            {
              "id": "digestAlgorithm",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "DigestAlgorithmIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "encapContentInfo",
              "name": "EncapsulatedContentInfo",
              "type": "defined"
            },
            {
              "id": "authAttrs",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AuthAttributes",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "mac",
              "name": "MessageAuthenticationCode",
              "type": "defined"
            },
            {
              "id": "unauthAttrs",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "UnauthAttributes",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "AuthAttributes": {
        "name": "AuthAttributes",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "Attribute",
              "type": "defined"
            }
          ]
        }
      },
      "UnauthAttributes": {
        "name": "UnauthAttributes",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "Attribute",
              "type": "defined"
            }
          ]
        }
      },
      "MessageAuthenticationCode": {
        "name": "MessageAuthenticationCode",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "DigestAlgorithmIdentifier": {
        "name": "DigestAlgorithmIdentifier",
        "type": {
          "name": "AlgorithmIdentifier",
          "type": "defined"
        }
      },
      "SignatureAlgorithmIdentifier": {
        "name": "SignatureAlgorithmIdentifier",
        "type": {
          "name": "AlgorithmIdentifier",
          "type": "defined"
        }
      },
      "KeyEncryptionAlgorithmIdentifier": {
        "name": "KeyEncryptionAlgorithmIdentifier",
        "type": {
          "name": "AlgorithmIdentifier",
          "type": "defined"
        }
      },
      "ContentEncryptionAlgorithmIdentifier": {
        "name": "ContentEncryptionAlgorithmIdentifier",
        "type": {
          "name": "AlgorithmIdentifier",
          "type": "defined"
        }
      },
      "MessageAuthenticationCodeAlgorithm": {
        "name": "MessageAuthenticationCodeAlgorithm",
        "type": {
          "name": "AlgorithmIdentifier",
          "type": "defined"
        }
      },
      "KeyDerivationAlgorithmIdentifier": {
        "name": "KeyDerivationAlgorithmIdentifier",
        "type": {
          "name": "AlgorithmIdentifier",
          "type": "defined"
        }
      },
      "CertificateRevocationLists": {
        "name": "CertificateRevocationLists",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "CertificateList",
              "type": "defined"
            }
          ]
        }
      },
      "CertificateChoices": {
        "name": "CertificateChoices",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "certificate",
              "name": "Certificate",
              "type": "defined"
            },
            {
              "id": "extendedCertificate",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "ExtendedCertificate",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "v1AttrCert",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AttributeCertificateV1",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "v2AttrCert",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AttributeCertificateV2",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "AttributeCertificateV2": {
        "name": "AttributeCertificateV2",
        "type": {
          "name": "AttributeCertificate",
          "type": "defined"
        }
      },
      "CertificateSet": {
        "name": "CertificateSet",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "CertificateChoices",
              "type": "defined"
            }
          ]
        }
      },
      "IssuerAndSerialNumber": {
        "name": "IssuerAndSerialNumber",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "issuer",
              "name": "Name",
              "type": "defined"
            },
            {
              "id": "serialNumber",
              "name": "CertificateSerialNumber",
              "type": "defined"
            }
          ]
        }
      },
      "CMSVersion": {
        "name": "CMSVersion",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "content": {
            "v0": 0,
            "v1": 1,
            "v2": 2,
            "v3": 3,
            "v4": 4
          }
        }
      },
      "UserKeyingMaterial": {
        "name": "UserKeyingMaterial",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "OtherKeyAttribute": {
        "name": "OtherKeyAttribute",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "keyAttrId",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "keyAttr",
              "name": "ANY",
              "type": "builtin",
              "definedBy": "keyAttrId",
              "optional": true
            }
          ]
        }
      },
      "MessageDigest": {
        "name": "MessageDigest",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "SigningTime": {
        "name": "SigningTime",
        "type": {
          "name": "Time",
          "type": "defined"
        }
      },
      "Time": {
        "name": "Time",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "utcTime",
              "name": "UTCTime",
              "type": "builtin",
              "content": "TODO:unknown"
            },
            {
              "id": "generalTime",
              "name": "GeneralizedTime",
              "type": "builtin",
              "content": "TODO:unknown"
            }
          ]
        }
      },
      "Countersignature": {
        "name": "Countersignature",
        "type": {
          "name": "SignerInfo",
          "type": "defined"
        }
      },
      "ExtendedCertificateOrCertificate": {
        "name": "ExtendedCertificateOrCertificate",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "certificate",
              "name": "Certificate",
              "type": "defined"
            },
            {
              "id": "extendedCertificate",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "ExtendedCertificate",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "ExtendedCertificate": {
        "name": "ExtendedCertificate",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "extendedCertificateInfo",
              "name": "ExtendedCertificateInfo",
              "type": "defined"
            },
            {
              "id": "signatureAlgorithm",
              "name": "SignatureAlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "signature",
              "name": "Signature",
              "type": "defined"
            }
          ]
        }
      },
      "ExtendedCertificateInfo": {
        "name": "ExtendedCertificateInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "CMSVersion",
              "type": "defined"
            },
            {
              "id": "certificate",
              "name": "Certificate",
              "type": "defined"
            },
            {
              "id": "attributes",
              "name": "UnauthAttributes",
              "type": "defined"
            }
          ]
        }
      },
      "Signature": {
        "name": "Signature",
        "type": {
          "name": "BIT STRING",
          "type": "builtin"
        }
      }
    }
  },
  "1.2.840.113549.1.9.16.0.15": {
    "name": "AttributeCertificateVersion1",
    "oid": "1.2.840.113549.1.9.16.0.15",
    "source": "rfc3369.txt",
    "tagDefault": "IMPLICIT",
    "imports": {
      "1.3.6.1.5.5.7.0.18": {
        "name": "PKIX1Explicit88",
        "oid": "1.3.6.1.5.5.7.0.18",
        "types": [
          "AlgorithmIdentifier",
          "Attribute",
          "CertificateSerialNumber",
          "Extensions",
          "UniqueIdentifier"
        ]
      },
      "1.3.6.1.5.5.7.0.19": {
        "name": "PKIX1Implicit88",
        "oid": "1.3.6.1.5.5.7.0.19",
        "types": [
          "GeneralNames"
        ]
      },
      "1.3.6.1.5.5.7.0.12": {
        "name": "PKIXAttributeCertificate",
        "oid": "1.3.6.1.5.5.7.0.12",
        "types": [
          "AttCertValidityPeriod",
          "IssuerSerial"
        ]
      }
    },
    "values": {},
    "types": {
      "AttributeCertificateV1": {
        "name": "AttributeCertificateV1",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "acInfo",
              "name": "AttributeCertificateInfoV1",
              "type": "defined"
            },
            {
              "id": "signatureAlgorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "signature",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "AttributeCertificateInfoV1": {
        "name": "AttributeCertificateInfoV1",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "AttCertVersionV1",
              "type": "defined",
              "default": "v1"
            },
            {
              "id": "subject",
              "name": "CHOICE",
              "type": "builtin",
              "content": [
                {
                  "id": "baseCertificateID",
                  "name": "[0]",
                  "type": "tag",
                  "class": "CONTEXT",
                  "explicit": false,
                  "content": [
                    {
                      "name": "",
                      "type": {
                        "name": "IssuerSerial",
                        "type": "defined"
                      }
                    }
                  ]
                },
                {
                  "id": "subjectName",
                  "name": "[1]",
                  "type": "tag",
                  "class": "CONTEXT",
                  "explicit": false,
                  "content": [
                    {
                      "name": "",
                      "type": {
                        "name": "GeneralNames",
                        "type": "defined"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "issuer",
              "name": "GeneralNames",
              "type": "defined"
            },
            {
              "id": "signature",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "serialNumber",
              "name": "CertificateSerialNumber",
              "type": "defined"
            },
            {
              "id": "attCertValidityPeriod",
              "name": "AttCertValidityPeriod",
              "type": "defined"
            },
            {
              "id": "attributes",
              "name": "SEQUENCE",
              "type": "builtin",
              "typeOf": 1,
              "content": [
                {
                  "name": "Attribute",
                  "type": "defined"
                }
              ]
            },
            {
              "id": "issuerUniqueID",
              "name": "UniqueIdentifier",
              "type": "defined",
              "optional": true
            },
            {
              "id": "extensions",
              "name": "Extensions",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "AttCertVersionV1": {
        "name": "AttCertVersionV1",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "content": {
            "v1": 0
          }
        }
      }
    }
  },
  "1.3.6.1.5.5.7.0.13": {
    "name": "PKIXTSP",
    "oid": "1.3.6.1.5.5.7.0.13",
    "source": "rfc3161.txt",
    "tagDefault": "IMPLICIT",
    "imports": {
      "1.3.6.1.5.5.7.0.1": {
        "name": "PKIX1Explicit88",
        "oid": "1.3.6.1.5.5.7.0.1",
        "types": [
          "Extensions",
          "AlgorithmIdentifier"
        ]
      },
      "1.3.6.1.5.5.7.0.2": {
        "name": "PKIX1Implicit88",
        "oid": "1.3.6.1.5.5.7.0.2",
        "types": [
          "GeneralName"
        ]
      },
      "1.2.840.113549.1.9.16.0.1": {
        "name": "CryptographicMessageSyntax",
        "oid": "1.2.840.113549.1.9.16.0.1",
        "types": [
          "ContentInfo"
        ]
      },
      "1.3.6.1.5.5.7.0.9": {
        "name": "PKIXCMP",
        "oid": "1.3.6.1.5.5.7.0.9",
        "types": [
          "PKIFreeText"
        ]
      }
    },
    "values": {
      "id-ct-TSTInfo": {
        "name": "id-ct-TSTInfo",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113549.1.9.16.1.4"
      }
    },
    "types": {
      "TimeStampReq": {
        "name": "TimeStampReq",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "INTEGER",
              "type": "builtin",
              "content": {
                "v1": 1
              }
            },
            {
              "id": "messageImprint",
              "name": "MessageImprint",
              "type": "defined"
            },
            {
              "id": "reqPolicy",
              "name": "TSAPolicyId",
              "type": "defined",
              "optional": true
            },
            {
              "id": "nonce",
              "name": "INTEGER",
              "type": "builtin",
              "optional": true
            },
            {
              "id": "certReq",
              "name": "BOOLEAN",
              "type": "builtin",
              "default": false
            },
            {
              "id": "extensions",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Extensions",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "MessageImprint": {
        "name": "MessageImprint",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "hashAlgorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "hashedMessage",
              "name": "OCTET STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "TSAPolicyId": {
        "name": "TSAPolicyId",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        }
      },
      "TimeStampResp": {
        "name": "TimeStampResp",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "status",
              "name": "PKIStatusInfo",
              "type": "defined"
            },
            {
              "id": "timeStampToken",
              "name": "TimeStampToken",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "PKIStatusInfo": {
        "name": "PKIStatusInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "status",
              "name": "PKIStatus",
              "type": "defined"
            },
            {
              "id": "statusString",
              "name": "PKIFreeText",
              "type": "defined",
              "optional": true
            },
            {
              "id": "failInfo",
              "name": "PKIFailureInfo",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "PKIStatus": {
        "name": "PKIStatus",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "content": {
            "granted": 0,
            "grantedWithMods": 1,
            "rejection": 2,
            "waiting": 3,
            "revocationWarning": 4,
            "revocationNotification": 5
          }
        }
      },
      "PKIFailureInfo": {
        "name": "PKIFailureInfo",
        "type": {
          "name": "BIT STRING",
          "type": "builtin",
          "content": {
            "badAlg": 0,
            "badRequest": 2,
            "badDataFormat": 5,
            "timeNotAvailable": 14,
            "unacceptedPolicy": 15,
            "unacceptedExtension": 16,
            "addInfoNotAvailable": 17,
            "systemFailure": 25
          }
        }
      },
      "TimeStampToken": {
        "name": "TimeStampToken",
        "type": {
          "name": "ContentInfo",
          "type": "defined"
        }
      },
      "TSTInfo": {
        "name": "TSTInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "INTEGER",
              "type": "builtin",
              "content": {
                "v1": 1
              }
            },
            {
              "id": "policy",
              "name": "TSAPolicyId",
              "type": "defined"
            },
            {
              "id": "messageImprint",
              "name": "MessageImprint",
              "type": "defined"
            },
            {
              "id": "serialNumber",
              "name": "INTEGER",
              "type": "builtin"
            },
            {
              "id": "genTime",
              "name": "GeneralizedTime",
              "type": "builtin",
              "content": "TODO:unknown"
            },
            {
              "id": "accuracy",
              "name": "Accuracy",
              "type": "defined",
              "optional": true
            },
            {
              "id": "ordering",
              "name": "BOOLEAN",
              "type": "builtin",
              "default": false
            },
            {
              "id": "nonce",
              "name": "INTEGER",
              "type": "builtin",
              "optional": true
            },
            {
              "id": "tsa",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GeneralName",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "extensions",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Extensions",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "Accuracy": {
        "name": "Accuracy",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "seconds",
              "name": "INTEGER",
              "type": "builtin",
              "optional": true
            },
            {
              "id": "millis",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "INTEGER",
                    "type": "builtin",
                    "range": [
                      1,
                      999
                    ]
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "micros",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "INTEGER",
                    "type": "builtin",
                    "range": [
                      1,
                      999
                    ]
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      }
    }
  },
  "1.2.840.113549.1.10.1.1": {
    "name": "PKCS-10",
    "oid": "1.2.840.113549.1.10.1.1",
    "source": "rfc2986.txt",
    "tagDefault": "IMPLICIT",
    "imports": {
      "2.5.1.0.3": {
        "name": "AuthenticationFramework",
        "oid": "2.5.1.0.3",
        "types": [
          "ALGORITHM"
        ]
      }
    },
    "values": {},
    "types": {
      "CertificationRequestInfo": {
        "name": "CertificationRequestInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "INTEGER",
              "type": "builtin",
              "content": {
                "v1": 0
              }
            },
            {
              "id": "subject",
              "name": "Name",
              "type": "defined"
            },
            {
              "id": "subjectPKInfo",
              "name": "SubjectPublicKeyInfo",
              "type": "defined"
            },
            {
              "id": "attributes",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Attributes",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "SubjectPublicKeyInfo": {
        "name": "SubjectPublicKeyInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "algorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "subjectPublicKey",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "Attributes": {
        "name": "Attributes",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "Attribute",
              "type": "defined"
            }
          ]
        }
      },
      "Attribute": {
        "name": "Attribute",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "type",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "values",
              "name": "SET",
              "type": "builtin",
              "typeOf": 1,
              "size": [
                1,
                "MAX"
              ],
              "content": [
                {
                  "name": "ANY",
                  "type": "builtin"
                }
              ]
            }
          ]
        }
      },
      "CertificationRequest": {
        "name": "CertificationRequest",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "certificationRequestInfo",
              "name": "CertificationRequestInfo",
              "type": "defined"
            },
            {
              "id": "signatureAlgorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "signature",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "AlgorithmIdentifier": {
        "name": "AlgorithmIdentifier",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "algorithm",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "parameters",
              "name": "ANY",
              "type": "builtin",
              "optional": true
            }
          ]
        }
      }
    }
  },
  "1.3.6.1.5.5.7.0.36": {
    "name": "PKIXCRMF-2005",
    "oid": "1.3.6.1.5.5.7.0.36",
    "source": "rfc4211.txt",
    "tagDefault": "IMPLICIT",
    "imports": {
      "1.3.6.1.5.5.7.0.18": {
        "name": "PKIX1Explicit88",
        "oid": "1.3.6.1.5.5.7.0.18",
        "types": [
          "Version",
          "AlgorithmIdentifier",
          "Name",
          "Time",
          "SubjectPublicKeyInfo",
          "Extensions",
          "UniqueIdentifier",
          "Attribute"
        ]
      },
      "1.3.6.1.5.5.7.0.19": {
        "name": "PKIX1Implicit88",
        "oid": "1.3.6.1.5.5.7.0.19",
        "types": [
          "GeneralName"
        ]
      },
      "1.2.840.113549.1.9.16.0.24": {
        "name": "CryptographicMessageSyntax2004",
        "oid": "1.2.840.113549.1.9.16.0.24",
        "types": [
          "EnvelopedData"
        ]
      }
    },
    "values": {
      "id-pkix": {
        "name": "id-pkix",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7"
      },
      "id-pkip": {
        "name": "id-pkip",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5"
      },
      "id-smime": {
        "name": "id-smime",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113549.1.9.16"
      },
      "id-ct": {
        "name": "id-ct",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113549.1.9.16.1"
      },
      "id-regCtrl": {
        "name": "id-regCtrl",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.1"
      },
      "id-regCtrl-regToken": {
        "name": "id-regCtrl-regToken",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.1.1"
      },
      "id-regCtrl-authenticator": {
        "name": "id-regCtrl-authenticator",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.1.2"
      },
      "id-regCtrl-pkiPublicationInfo": {
        "name": "id-regCtrl-pkiPublicationInfo",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.1.3"
      },
      "id-regCtrl-pkiArchiveOptions": {
        "name": "id-regCtrl-pkiArchiveOptions",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.1.4"
      },
      "id-regCtrl-oldCertID": {
        "name": "id-regCtrl-oldCertID",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.1.5"
      },
      "id-regCtrl-protocolEncrKey": {
        "name": "id-regCtrl-protocolEncrKey",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.1.6"
      },
      "id-regInfo": {
        "name": "id-regInfo",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.2"
      },
      "id-regInfo-utf8Pairs": {
        "name": "id-regInfo-utf8Pairs",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.2.1"
      },
      "id-regInfo-certReq": {
        "name": "id-regInfo-certReq",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.3.6.1.5.5.7.5.2.2"
      },
      "id-ct-encKeyWithID": {
        "name": "id-ct-encKeyWithID",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113549.1.9.16.1.21"
      }
    },
    "types": {
      "CertReqMessages": {
        "name": "CertReqMessages",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "CertReqMsg",
              "type": "defined"
            }
          ]
        }
      },
      "CertReqMsg": {
        "name": "CertReqMsg",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "certReq",
              "name": "CertRequest",
              "type": "defined"
            },
            {
              "id": "popo",
              "name": "ProofOfPossession",
              "type": "defined",
              "optional": true
            },
            {
              "id": "regInfo",
              "name": "SEQUENCE",
              "type": "builtin",
              "typeOf": 1,
              "size": [
                1,
                "MAX"
              ],
              "content": [
                {
                  "name": "AttributeTypeAndValue",
                  "type": "defined"
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "CertRequest": {
        "name": "CertRequest",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "certReqId",
              "name": "INTEGER",
              "type": "builtin"
            },
            {
              "id": "certTemplate",
              "name": "CertTemplate",
              "type": "defined"
            },
            {
              "id": "controls",
              "name": "Controls",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "CertTemplate": {
        "name": "CertTemplate",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Version",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "serialNumber",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "INTEGER",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "signingAlg",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AlgorithmIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "issuer",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Name",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "validity",
              "name": "[4]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OptionalValidity",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "subject",
              "name": "[5]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Name",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "publicKey",
              "name": "[6]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SubjectPublicKeyInfo",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "issuerUID",
              "name": "[7]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "UniqueIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "subjectUID",
              "name": "[8]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "UniqueIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "extensions",
              "name": "[9]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Extensions",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "OptionalValidity": {
        "name": "OptionalValidity",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "notBefore",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Time",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "notAfter",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Time",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "Controls": {
        "name": "Controls",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "AttributeTypeAndValue",
              "type": "defined"
            }
          ]
        }
      },
      "AttributeTypeAndValue": {
        "name": "AttributeTypeAndValue",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "type",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "value",
              "name": "ANY",
              "type": "builtin",
              "definedBy": "type"
            }
          ]
        }
      },
      "ProofOfPossession": {
        "name": "ProofOfPossession",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "raVerified",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "NULL",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "signature",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "POPOSigningKey",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "keyEncipherment",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "POPOPrivKey",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "keyAgreement",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "POPOPrivKey",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "POPOSigningKey": {
        "name": "POPOSigningKey",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "poposkInput",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "POPOSigningKeyInput",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "algorithmIdentifier",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "signature",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "POPOSigningKeyInput": {
        "name": "POPOSigningKeyInput",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "authInfo",
              "name": "CHOICE",
              "type": "builtin",
              "content": [
                {
                  "id": "sender",
                  "name": "[0]",
                  "type": "tag",
                  "class": "CONTEXT",
                  "explicit": false,
                  "content": [
                    {
                      "name": "",
                      "type": {
                        "name": "GeneralName",
                        "type": "defined"
                      }
                    }
                  ]
                },
                {
                  "id": "publicKeyMAC",
                  "name": "PKMACValue",
                  "type": "defined"
                }
              ]
            },
            {
              "id": "publicKey",
              "name": "SubjectPublicKeyInfo",
              "type": "defined"
            }
          ]
        }
      },
      "PKMACValue": {
        "name": "PKMACValue",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "algId",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "value",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "PBMParameter": {
        "name": "PBMParameter",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "salt",
              "name": "OCTET STRING",
              "type": "builtin"
            },
            {
              "id": "owf",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "iterationCount",
              "name": "INTEGER",
              "type": "builtin"
            },
            {
              "id": "mac",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            }
          ]
        }
      },
      "POPOPrivKey": {
        "name": "POPOPrivKey",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "thisMessage",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BIT STRING",
                    "type": "builtin"
                  }
                }
              ]
            },
            {
              "id": "subsequentMessage",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SubsequentMessage",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "dhMAC",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BIT STRING",
                    "type": "builtin"
                  }
                }
              ]
            },
            {
              "id": "agreeMAC",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PKMACValue",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "encryptedKey",
              "name": "[4]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "EnvelopedData",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "SubsequentMessage": {
        "name": "SubsequentMessage",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "content": {
            "encrCert": 0,
            "challengeResp": 1
          }
        }
      },
      "RegToken": {
        "name": "RegToken",
        "type": {
          "name": "UTF8String",
          "type": "builtin"
        }
      },
      "Authenticator": {
        "name": "Authenticator",
        "type": {
          "name": "UTF8String",
          "type": "builtin"
        }
      },
      "PKIPublicationInfo": {
        "name": "PKIPublicationInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "action",
              "name": "INTEGER",
              "type": "builtin",
              "content": {
                "dontPublish": 0,
                "pleasePublish": 1
              }
            },
            {
              "id": "pubInfos",
              "name": "SEQUENCE",
              "type": "builtin",
              "typeOf": 1,
              "size": [
                1,
                "MAX"
              ],
              "content": [
                {
                  "name": "SinglePubInfo",
                  "type": "defined"
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "SinglePubInfo": {
        "name": "SinglePubInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "pubMethod",
              "name": "INTEGER",
              "type": "builtin",
              "content": {
                "dontCare": 0,
                "x500": 1,
                "web": 2,
                "ldap": 3
              }
            },
            {
              "id": "pubLocation",
              "name": "GeneralName",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "PKIArchiveOptions": {
        "name": "PKIArchiveOptions",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "encryptedPrivKey",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "EncryptedKey",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "keyGenParameters",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "KeyGenParameters",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "archiveRemGenPrivKey",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BOOLEAN",
                    "type": "builtin"
                  }
                }
              ]
            }
          ]
        }
      },
      "EncryptedKey": {
        "name": "EncryptedKey",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "encryptedValue",
              "name": "EncryptedValue",
              "type": "defined"
            },
            {
              "id": "envelopedData",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "EnvelopedData",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "EncryptedValue": {
        "name": "EncryptedValue",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "intendedAlg",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AlgorithmIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "symmAlg",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AlgorithmIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "encSymmKey",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "BIT STRING",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "keyAlg",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AlgorithmIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "valueHint",
              "name": "[4]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OCTET STRING",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "encValue",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "KeyGenParameters": {
        "name": "KeyGenParameters",
        "type": {
          "name": "OCTET STRING",
          "type": "builtin"
        }
      },
      "OldCertId": {
        "name": "OldCertId",
        "type": {
          "name": "CertId",
          "type": "defined"
        }
      },
      "CertId": {
        "name": "CertId",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "issuer",
              "name": "GeneralName",
              "type": "defined"
            },
            {
              "id": "serialNumber",
              "name": "INTEGER",
              "type": "builtin"
            }
          ]
        }
      },
      "ProtocolEncrKey": {
        "name": "ProtocolEncrKey",
        "type": {
          "name": "SubjectPublicKeyInfo",
          "type": "defined"
        }
      },
      "UTF8Pairs": {
        "name": "UTF8Pairs",
        "type": {
          "name": "UTF8String",
          "type": "builtin"
        }
      },
      "CertReq": {
        "name": "CertReq",
        "type": {
          "name": "CertRequest",
          "type": "defined"
        }
      },
      "EncKeyWithID": {
        "name": "EncKeyWithID",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "privateKey",
              "name": "PrivateKeyInfo",
              "type": "defined"
            },
            {
              "id": "identifier",
              "name": "CHOICE",
              "type": "builtin",
              "content": [
                {
                  "id": "string",
                  "name": "UTF8String",
                  "type": "builtin"
                },
                {
                  "id": "generalName",
                  "name": "GeneralName",
                  "type": "defined"
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "PrivateKeyInfo": {
        "name": "PrivateKeyInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "version",
              "name": "INTEGER",
              "type": "builtin"
            },
            {
              "id": "privateKeyAlgorithm",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "privateKey",
              "name": "OCTET STRING",
              "type": "builtin"
            },
            {
              "id": "attributes",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": false,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "Attributes",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "Attributes": {
        "name": "Attributes",
        "type": {
          "name": "SET",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "Attribute",
              "type": "defined"
            }
          ]
        }
      }
    }
  },
  "1.3.6.1.5.5.7.0.16": {
    "name": "PKIXCMP",
    "oid": "1.3.6.1.5.5.7.0.16",
    "source": "rfc4210.txt",
    "tagDefault": "EXPLICIT",
    "imports": {
      "1.3.6.1.5.5.7.0.1": {
        "name": "PKIX1Explicit88",
        "oid": "1.3.6.1.5.5.7.0.1",
        "types": [
          "Certificate",
          "CertificateList",
          "Extensions",
          "AlgorithmIdentifier",
          "UTF8String"
        ]
      },
      "1.3.6.1.5.5.7.0.2": {
        "name": "PKIX1Implicit88",
        "oid": "1.3.6.1.5.5.7.0.2",
        "types": [
          "GeneralName",
          "KeyIdentifier"
        ]
      },
      "1.3.6.1.5.5.7.0.36": {
        "name": "PKIXCRMF-2005",
        "oid": "1.3.6.1.5.5.7.0.36",
        "types": [
          "CertTemplate",
          "PKIPublicationInfo",
          "EncryptedValue",
          "CertId",
          "CertReqMessages"
        ]
      },
      "1.2.840.113549.1.10.1.1": {
        "name": "PKCS-10",
        "oid": "1.2.840.113549.1.10.1.1",
        "types": [
          "CertificationRequest"
        ]
      }
    },
    "values": {
      "id-PasswordBasedMac": {
        "name": "id-PasswordBasedMac",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113533.7.66.13"
      },
      "id-DHBasedMac": {
        "name": "id-DHBasedMac",
        "type": {
          "name": "OBJECT IDENTIFIER",
          "type": "builtin"
        },
        "value": "1.2.840.113533.7.66.30"
      }
    },
    "types": {
      "CMPCertificate": {
        "name": "CMPCertificate",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "x509v3PKCert",
              "name": "Certificate",
              "type": "defined"
            }
          ]
        }
      },
      "PKIMessage": {
        "name": "PKIMessage",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "header",
              "name": "PKIHeader",
              "type": "defined"
            },
            {
              "id": "body",
              "name": "PKIBody",
              "type": "defined"
            },
            {
              "id": "protection",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PKIProtection",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "extraCerts",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SEQUENCE",
                    "type": "builtin",
                    "typeOf": 1,
                    "size": [
                      1,
                      "MAX"
                    ],
                    "content": [
                      {
                        "name": "CMPCertificate",
                        "type": "defined"
                      }
                    ]
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "PKIMessages": {
        "name": "PKIMessages",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "PKIMessage",
              "type": "defined"
            }
          ]
        }
      },
      "PKIHeader": {
        "name": "PKIHeader",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "pvno",
              "name": "INTEGER",
              "type": "builtin",
              "content": {
                "cmp1999": 1,
                "cmp2000": 2
              }
            },
            {
              "id": "sender",
              "name": "GeneralName",
              "type": "defined"
            },
            {
              "id": "recipient",
              "name": "GeneralName",
              "type": "defined"
            },
            {
              "id": "messageTime",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GeneralizedTime",
                    "type": "builtin",
                    "content": "TODO:unknown"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "protectionAlg",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AlgorithmIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "senderKID",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "KeyIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "recipKID",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "KeyIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "transactionID",
              "name": "[4]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OCTET STRING",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "senderNonce",
              "name": "[5]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OCTET STRING",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "recipNonce",
              "name": "[6]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "OCTET STRING",
                    "type": "builtin"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "freeText",
              "name": "[7]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PKIFreeText",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "generalInfo",
              "name": "[8]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SEQUENCE",
                    "type": "builtin",
                    "typeOf": 1,
                    "size": [
                      1,
                      "MAX"
                    ],
                    "content": [
                      {
                        "name": "InfoTypeAndValue",
                        "type": "defined"
                      }
                    ]
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "PKIFreeText": {
        "name": "PKIFreeText",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "size": [
            1,
            "MAX"
          ],
          "content": [
            {
              "name": "UTF8String",
              "type": "builtin"
            }
          ]
        }
      },
      "PKIBody": {
        "name": "PKIBody",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "ir",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertReqMessages",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "ip",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertRepMessage",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "cr",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertReqMessages",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "cp",
              "name": "[3]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertRepMessage",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "p10cr",
              "name": "[4]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertificationRequest",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "popdecc",
              "name": "[5]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "POPODecKeyChallContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "popdecr",
              "name": "[6]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "POPODecKeyRespContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "kur",
              "name": "[7]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertReqMessages",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "kup",
              "name": "[8]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertRepMessage",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "krr",
              "name": "[9]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertReqMessages",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "krp",
              "name": "[10]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "KeyRecRepContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "rr",
              "name": "[11]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "RevReqContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "rp",
              "name": "[12]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "RevRepContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "ccr",
              "name": "[13]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertReqMessages",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "ccp",
              "name": "[14]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertRepMessage",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "ckuann",
              "name": "[15]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CAKeyUpdAnnContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "cann",
              "name": "[16]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertAnnContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "rann",
              "name": "[17]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "RevAnnContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "crlann",
              "name": "[18]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CRLAnnContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "pkiconf",
              "name": "[19]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PKIConfirmContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "nested",
              "name": "[20]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "NestedMessageContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "genm",
              "name": "[21]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GenMsgContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "genp",
              "name": "[22]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "GenRepContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "error",
              "name": "[23]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "ErrorMsgContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "certConf",
              "name": "[24]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertConfirmContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "pollReq",
              "name": "[25]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PollReqContent",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "pollRep",
              "name": "[26]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PollRepContent",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "PKIProtection": {
        "name": "PKIProtection",
        "type": {
          "name": "BIT STRING",
          "type": "builtin"
        }
      },
      "ProtectedPart": {
        "name": "ProtectedPart",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "header",
              "name": "PKIHeader",
              "type": "defined"
            },
            {
              "id": "body",
              "name": "PKIBody",
              "type": "defined"
            }
          ]
        }
      },
      "PBMParameter": {
        "name": "PBMParameter",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "salt",
              "name": "OCTET STRING",
              "type": "builtin"
            },
            {
              "id": "owf",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "iterationCount",
              "name": "INTEGER",
              "type": "builtin"
            },
            {
              "id": "mac",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            }
          ]
        }
      },
      "DHBMParameter": {
        "name": "DHBMParameter",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "owf",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            },
            {
              "id": "mac",
              "name": "AlgorithmIdentifier",
              "type": "defined"
            }
          ]
        }
      },
      "NestedMessageContent": {
        "name": "NestedMessageContent",
        "type": {
          "name": "PKIMessages",
          "type": "defined"
        }
      },
      "PKIStatus": {
        "name": "PKIStatus",
        "type": {
          "name": "INTEGER",
          "type": "builtin",
          "content": {
            "accepted": 0,
            "grantedWithMods": 1,
            "rejection": 2,
            "waiting": 3,
            "revocationWarning": 4,
            "revocationNotification": 5,
            "keyUpdateWarning": 6
          }
        }
      },
      "PKIFailureInfo": {
        "name": "PKIFailureInfo",
        "type": {
          "name": "BIT STRING",
          "type": "builtin",
          "content": {
            "badAlg": 0,
            "badMessageCheck": 1,
            "badRequest": 2,
            "badTime": 3,
            "badCertId": 4,
            "badDataFormat": 5,
            "wrongAuthority": 6,
            "incorrectData": 7,
            "missingTimeStamp": 8,
            "badPOP": 9,
            "certRevoked": 10,
            "certConfirmed": 11,
            "wrongIntegrity": 12,
            "badRecipientNonce": 13,
            "timeNotAvailable": 14,
            "unacceptedPolicy": 15,
            "unacceptedExtension": 16,
            "addInfoNotAvailable": 17,
            "badSenderNonce": 18,
            "badCertTemplate": 19,
            "signerNotTrusted": 20,
            "transactionIdInUse": 21,
            "unsupportedVersion": 22,
            "notAuthorized": 23,
            "systemUnavail": 24,
            "systemFailure": 25,
            "duplicateCertReq": 26
          }
        }
      },
      "PKIStatusInfo": {
        "name": "PKIStatusInfo",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "status",
              "name": "PKIStatus",
              "type": "defined"
            },
            {
              "id": "statusString",
              "name": "PKIFreeText",
              "type": "defined",
              "optional": true
            },
            {
              "id": "failInfo",
              "name": "PKIFailureInfo",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "OOBCert": {
        "name": "OOBCert",
        "type": {
          "name": "CMPCertificate",
          "type": "defined"
        }
      },
      "OOBCertHash": {
        "name": "OOBCertHash",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "hashAlg",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "AlgorithmIdentifier",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "certId",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CertId",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "hashVal",
              "name": "BIT STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "POPODecKeyChallContent": {
        "name": "POPODecKeyChallContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "Challenge",
              "type": "defined"
            }
          ]
        }
      },
      "Challenge": {
        "name": "Challenge",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "owf",
              "name": "AlgorithmIdentifier",
              "type": "defined",
              "optional": true
            },
            {
              "id": "witness",
              "name": "OCTET STRING",
              "type": "builtin"
            },
            {
              "id": "challenge",
              "name": "OCTET STRING",
              "type": "builtin"
            }
          ]
        }
      },
      "POPODecKeyRespContent": {
        "name": "POPODecKeyRespContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "INTEGER",
              "type": "builtin"
            }
          ]
        }
      },
      "CertRepMessage": {
        "name": "CertRepMessage",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "caPubs",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SEQUENCE",
                    "type": "builtin",
                    "typeOf": 1,
                    "size": [
                      1,
                      "MAX"
                    ],
                    "content": [
                      {
                        "name": "CMPCertificate",
                        "type": "defined"
                      }
                    ]
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "response",
              "name": "SEQUENCE",
              "type": "builtin",
              "typeOf": 1,
              "content": [
                {
                  "name": "CertResponse",
                  "type": "defined"
                }
              ]
            }
          ]
        }
      },
      "CertResponse": {
        "name": "CertResponse",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "certReqId",
              "name": "INTEGER",
              "type": "builtin"
            },
            {
              "id": "status",
              "name": "PKIStatusInfo",
              "type": "defined"
            },
            {
              "id": "certifiedKeyPair",
              "name": "CertifiedKeyPair",
              "type": "defined",
              "optional": true
            },
            {
              "id": "rspInfo",
              "name": "OCTET STRING",
              "type": "builtin",
              "optional": true
            }
          ]
        }
      },
      "CertifiedKeyPair": {
        "name": "CertifiedKeyPair",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "certOrEncCert",
              "name": "CertOrEncCert",
              "type": "defined"
            },
            {
              "id": "privateKey",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "EncryptedValue",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "publicationInfo",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "PKIPublicationInfo",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "CertOrEncCert": {
        "name": "CertOrEncCert",
        "type": {
          "name": "CHOICE",
          "type": "builtin",
          "content": [
            {
              "id": "certificate",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CMPCertificate",
                    "type": "defined"
                  }
                }
              ]
            },
            {
              "id": "encryptedCert",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "EncryptedValue",
                    "type": "defined"
                  }
                }
              ]
            }
          ]
        }
      },
      "KeyRecRepContent": {
        "name": "KeyRecRepContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "status",
              "name": "PKIStatusInfo",
              "type": "defined"
            },
            {
              "id": "newSigCert",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "CMPCertificate",
                    "type": "defined"
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "caCerts",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SEQUENCE",
                    "type": "builtin",
                    "typeOf": 1,
                    "size": [
                      1,
                      "MAX"
                    ],
                    "content": [
                      {
                        "name": "CMPCertificate",
                        "type": "defined"
                      }
                    ]
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "keyPairHist",
              "name": "[2]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SEQUENCE",
                    "type": "builtin",
                    "typeOf": 1,
                    "size": [
                      1,
                      "MAX"
                    ],
                    "content": [
                      {
                        "name": "CertifiedKeyPair",
                        "type": "defined"
                      }
                    ]
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "RevReqContent": {
        "name": "RevReqContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "RevDetails",
              "type": "defined"
            }
          ]
        }
      },
      "RevDetails": {
        "name": "RevDetails",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "certDetails",
              "name": "CertTemplate",
              "type": "defined"
            },
            {
              "id": "crlEntryDetails",
              "name": "Extensions",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "RevRepContent": {
        "name": "RevRepContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "status",
              "name": "SEQUENCE",
              "type": "builtin",
              "typeOf": 1,
              "size": [
                1,
                "MAX"
              ],
              "content": [
                {
                  "name": "PKIStatusInfo",
                  "type": "defined"
                }
              ]
            },
            {
              "id": "revCerts",
              "name": "[0]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SEQUENCE",
                    "type": "builtin",
                    "typeOf": 1,
                    "size": [
                      1,
                      "MAX"
                    ],
                    "content": [
                      {
                        "name": "CertId",
                        "type": "defined"
                      }
                    ]
                  }
                }
              ],
              "optional": true
            },
            {
              "id": "crls",
              "name": "[1]",
              "type": "tag",
              "class": "CONTEXT",
              "explicit": true,
              "content": [
                {
                  "name": "",
                  "type": {
                    "name": "SEQUENCE",
                    "type": "builtin",
                    "typeOf": 1,
                    "size": [
                      1,
                      "MAX"
                    ],
                    "content": [
                      {
                        "name": "CertificateList",
                        "type": "defined"
                      }
                    ]
                  }
                }
              ],
              "optional": true
            }
          ]
        }
      },
      "CAKeyUpdAnnContent": {
        "name": "CAKeyUpdAnnContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "oldWithNew",
              "name": "CMPCertificate",
              "type": "defined"
            },
            {
              "id": "newWithOld",
              "name": "CMPCertificate",
              "type": "defined"
            },
            {
              "id": "newWithNew",
              "name": "CMPCertificate",
              "type": "defined"
            }
          ]
        }
      },
      "CertAnnContent": {
        "name": "CertAnnContent",
        "type": {
          "name": "CMPCertificate",
          "type": "defined"
        }
      },
      "RevAnnContent": {
        "name": "RevAnnContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "status",
              "name": "PKIStatus",
              "type": "defined"
            },
            {
              "id": "certId",
              "name": "CertId",
              "type": "defined"
            },
            {
              "id": "willBeRevokedAt",
              "name": "GeneralizedTime",
              "type": "builtin",
              "content": "TODO:unknown"
            },
            {
              "id": "badSinceDate",
              "name": "GeneralizedTime",
              "type": "builtin",
              "content": "TODO:unknown"
            },
            {
              "id": "crlDetails",
              "name": "Extensions",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "CRLAnnContent": {
        "name": "CRLAnnContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "CertificateList",
              "type": "defined"
            }
          ]
        }
      },
      "CertConfirmContent": {
        "name": "CertConfirmContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "CertStatus",
              "type": "defined"
            }
          ]
        }
      },
      "CertStatus": {
        "name": "CertStatus",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "certHash",
              "name": "OCTET STRING",
              "type": "builtin"
            },
            {
              "id": "certReqId",
              "name": "INTEGER",
              "type": "builtin"
            },
            {
              "id": "statusInfo",
              "name": "PKIStatusInfo",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "PKIConfirmContent": {
        "name": "PKIConfirmContent",
        "type": {
          "name": "NULL",
          "type": "defined"
        }
      },
      "InfoTypeAndValue": {
        "name": "InfoTypeAndValue",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "infoType",
              "name": "OBJECT IDENTIFIER",
              "type": "builtin"
            },
            {
              "id": "infoValue",
              "name": "ANY",
              "type": "builtin",
              "definedBy": "infoType",
              "optional": true
            }
          ]
        }
      },
      "GenMsgContent": {
        "name": "GenMsgContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "InfoTypeAndValue",
              "type": "defined"
            }
          ]
        }
      },
      "GenRepContent": {
        "name": "GenRepContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "InfoTypeAndValue",
              "type": "defined"
            }
          ]
        }
      },
      "ErrorMsgContent": {
        "name": "ErrorMsgContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "content": [
            {
              "id": "pKIStatusInfo",
              "name": "PKIStatusInfo",
              "type": "defined"
            },
            {
              "id": "errorCode",
              "name": "INTEGER",
              "type": "builtin",
              "optional": true
            },
            {
              "id": "errorDetails",
              "name": "PKIFreeText",
              "type": "defined",
              "optional": true
            }
          ]
        }
      },
      "PollReqContent": {
        "name": "PollReqContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "SEQUENCE",
              "type": "builtin",
              "content": [
                {
                  "id": "certReqId",
                  "name": "INTEGER",
                  "type": "builtin"
                }
              ]
            }
          ]
        }
      },
      "PollRepContent": {
        "name": "PollRepContent",
        "type": {
          "name": "SEQUENCE",
          "type": "builtin",
          "typeOf": 1,
          "content": [
            {
              "name": "SEQUENCE",
              "type": "builtin",
              "content": [
                {
                  "id": "certReqId",
                  "name": "INTEGER",
                  "type": "builtin"
                },
                {
                  "id": "checkAfter",
                  "name": "INTEGER",
                  "type": "builtin"
                },
                {
                  "id": "reason",
                  "name": "PKIFreeText",
                  "type": "defined",
                  "optional": true
                }
              ]
            }
          ]
        }
      }
    }
  }
}
;

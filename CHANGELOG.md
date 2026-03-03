# ChangeLog

## 2.1.2 - 2026-03-02

### Changed

- properly support `GeneralizedTime` with any number of decimals
- use native `BigInt` instead of old `int10.js`
- fix SVG images in single-file version

## 2.1.1 - 2025-10-24

### Changed

- update dev dependencies
- fix test suite that was reporting no error with empty responses

### Added

- add content length check for BOOLEAN, INTEGER, OID ([GitHub #104](https://github.com/lapo-luchini/asn1js/pull/104))

## 2.1.0 - 2025-08-03

### Changed

- when fields are CHOICEs now both the field name and the choice name are shown (fixes [GitHub #102](https://github.com/lapo-luchini/asn1js/issues/102))
- upgrade minimum NodeJS version supported from 12.20.0 to 14.6.0 due to usage of ?. and ?? operators in defs.js (ECMAScript 2020); older code is still linted against ECMAScript 2015 for now

### Added

- add tests to check expected decoding

## 2.0.6 - 2025-07-29

### Added

- add proper support for standard Base64 (we previously only supported Base64url) (fixes [GitHub #99](https://github.com/lapo-luchini/asn1js/pull/99))
- improve test harness

## 2.0.5 - 2025-04-12

### Added

- add `index-local.html` for local `file://` usage without needing a web server
- add definitions support for `LDAPMessage`
- #TODO continue producing old ChangeLog entries

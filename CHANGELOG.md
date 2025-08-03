# ChangeLog

## 2.1.0 - 2025-08-03

### Changed

- when fields are CHOICEs now both the field name and the choice name are shown (fixes GitHub #102)
- upgrade minimum NodeJS version supported from 12.20.0 to 14.5.0 due to usage of ?. and ?? operators in defs.js (ECMAScript 2020); older code is still linted against ECMAScript 2015 for now

### Added

- add tests to check expected decoding

## 2.0.6 - 2025-07-29

### Added

- add proper support for standard Base64 (we previously only supported Base64url) (fixes GitHub #99)
- improve test harness

## 2.0.5 - 2025-04-12

### Added

- add `index-local.html` for local `file://` usage without needing a web server
- add definitions support for `LDAPMessage`
- #TODO continue producing old ChangeLog entries

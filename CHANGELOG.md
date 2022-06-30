# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.15.2](#) (2022-06-30)


### Bug Fixes

* treat all ionic:// urls as localhost addresses ([fbc5038](#))

### [2.15.1](#) (2022-05-12)


### Bug Fixes

* always allow clearing annotations ([da2049d](#))
* validate trusted origins ([1879456](#))

## [2.15.0](#) (2022-04-18)


### Features

* set full_device state as enum properties ([b82cc1a](#))


### Bug Fixes

* avoid duplicate full device request dialogs ([24dd3e0](#))

### [2.14.1](#) (2022-04-18)


### Bug Fixes

* fix an issue in Chrome full device video processing that could cause full device mode to fail in latest version of Chrome ([2cfcca4](#))

## [2.14.0](#) (2022-03-29)


### Features

* expose API error ids ([c54f4e4](#))

### [2.13.2](#) (2022-02-16)


### Bug Fixes

* bump test timeout for tests that use agentJoin ([6f945ba](#))
* propagate DOM updates to a redacted root when indirectly redacted node changes ([bbd9093](#))

### [2.13.1](#) (2022-02-10)


### Bug Fixes

* fix for <style> tags when used inside <svg> tags ([9516310](#))

## [2.13.0](#) (2022-02-02)


### Features

* fire loaded event the first time a session is fetched from the server ([b07ec8b](#))


### Bug Fixes

* allow calls to update() with empty object ([3fc9918](#))
* ignore requests to update identical state ([da0a67e](#))

### [2.12.1](#) (2022-01-29)


### Bug Fixes

* fix crash caused by xdoc iframe redaction ([beb88f9](#))

## [2.12.0](#) (2022-01-25)


### Bug Fixes

* import test code / svg test ([7480a19](#))
* use cobrowse.io domain for api requests, fixes cross domain session iframe loading ([11e6808](#))

### [2.11.4](#) (2021-12-08)


### Bug Fixes

* set redaction: undefined when not redacted ([6c0c212](#))
* treat unredacted nodes as being added ([c2bf353](#))

### [2.11.2](#) (2021-11-09)

### [2.11.1](#) (2021-11-09)

## [2.11.0](#) (2021-11-02)


### Features

* Adds initial support for cross domain cobrowsing ([c34d0c9](#))


### Bug Fixes

* prevent notifications being processed multiple times after multiple stop/start cycles ([f173a88](#))

### [2.10.2](#) (2021-10-04)

### [2.10.1](#) (2021-08-16)

## [2.10.0](#) (2021-08-16)


### Features

* added cbio_session_overlay class to laser and annotation UI ([a7b9105](#))


### Bug Fixes

* fixed localStorage check in order to fallback to in-memory or cookie based storage ([11e7ddf](#))

### [2.9.2](#) (2021-07-13)


### Bug Fixes

* Fix an issue caused by dynamicly updating children of redacted elements ([8a3b748](#))

### [2.9.1](#) (2021-07-09)


### Bug Fixes

* Added NPM support. You can now load CobrowseIO via your module loader! ([bee3702](#))

## [2.9.0](#) (2021-07-09)


### Features

* expose full device setter ([c96d3f0](#))


### Bug Fixes

* use corejs 3.15 ([0341680](#))

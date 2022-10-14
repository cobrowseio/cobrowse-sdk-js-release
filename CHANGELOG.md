# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.16.8](#) (2022-10-14)


### Bug Fixes

* catch null defaultView ([83e7c65](#))
* fix case where nested iframes could cause an error when calling CobrowseIO.stop() ([5734a39](#))

### [2.16.7](#) (2022-09-29)


### Bug Fixes

* ensure redacted elements have flex-basis: unset ([#23](#)) ([6c1f068](#))

### [2.16.6](#) (2022-09-22)


### Bug Fixes

* avoid double fetch on session decompression ([3229941](#))
* base session token on static device token to avoid race condition ([259d105](#))
* set session as current as soon as it's created ([7a3d2d4](#))
* store token value directly in header ([b2a95a4](#))
* synchronize agent join ([dc78c17](#))
* **test:** intermittently failing test should be retried ([1141d56](#))

### [2.16.5](#) (2022-08-24)


### Bug Fixes

* respect preventDefault() on key entry based events ([6551f11](#))
* trigger event modifications asynchronously to provide a chance for user handlers to run first ([5fd60e0](#))

### [2.16.4](#) (2022-08-18)


### Bug Fixes

* ensure the token header is always set of session requests ([6f85cf9](#))

### [2.16.3](#) (2022-08-12)


### Bug Fixes

* catch errors caused by canvas serialization failures ([0b206f6](#))

### [2.16.2](#) (2022-08-10)

### [2.16.1](#) (2022-07-26)


### Bug Fixes

* fix copy / paste error in french translations ([098a65d](#))

## [2.16.0](#) (2022-07-25)


### Features

* add french translations ([8966860](#))
* localisation groundwork ([45bf65b](#))

### [2.15.3](#) (2022-07-08)


### Bug Fixes

* dependency updates ([1e9bb12](#))
* only update input values on keydown for textareas and text inputs ([2ed21ad](#))

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

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.25.1](#) (2023-05-19)


### Bug Fixes

* better support for mouse position sync in nested iframes ([140e5bb](#))

## [2.25.0](#) (2023-05-11)


### Features

* End Cobrowse session on Genesys chat ended ([#82](#)) ([32c95c3](#))

## [2.24.0](#) (2023-05-01)


### Features

* add new CobrowseIO.registration api ([937ce22](#))

### [2.23.8](#) (2023-04-26)


### Bug Fixes

* allow delayed loading of snippet in xdoc iframes ([ad57158](#))
* fix for edge case preventing xdoc iframes nested within non-xdoc iframes ([f28067a](#))

### [2.23.7](#) (2023-04-14)


### Bug Fixes

* fix cross document iframes used inside shadow DOMs ([#76](#)) ([9daa61f](#))

### [2.23.6](#) (2023-04-11)


### Bug Fixes

* fix crash caused by third party iframe updates ([6bf709a](#))

### [2.23.5](#) (2023-04-06)


### Bug Fixes

* avoid appendChild issues with lightning components ([4b026cc](#))
* fix race condition in zE initialisation ([#75](#)) ([255fc5a](#))

### [2.23.4](#) (2023-04-05)

### [2.23.3](#) (2023-04-05)


### Bug Fixes

* fix a race condition when watching for Zendesk messenger ([#74](#)) ([486bef7](#))

### [2.23.2](#) (2023-03-29)


### Bug Fixes

* improve parsing of language codes ([8e128b0](#))

### [2.23.1](#) (2023-03-28)


### Bug Fixes

* workaround non-standard lighting component behaviours ([#69](#)) ([3d22422](#))

## [2.23.0](#) (2023-03-23)


### Features

* support Freshchat integration ([#56](#)) ([629b7fd](#))


### Bug Fixes

* improve performance with large changesets ([#67](#)) ([8c9465f](#))

### [2.22.10](#) (2023-03-14)


### Bug Fixes

* better support for forwarding sessions storage based on link elements with nested content

### [2.22.9](#) (2023-03-13)


### Bug Fixes

* Move patch-package from devDependencies to dependencies.

### [2.22.8](#) (2023-03-08)


### Bug Fixes

* avoid double call to activate
* Update repo URL to public release repo

### [2.22.6](#) (2023-03-07)


### Bug Fixes

* Ensure Lightning components DOM updates get serialised correctly
* ensure redacted elements position is updated when parents change
* patch cbor-x to avoid throwing an exception on browsers without support for BigInt typed arrays
* use a two image system for drawings to avoid flickering on Firefox

### [2.22.5](#) (2023-02-21)


### Bug Fixes

* allow dynamic updates of server capabilities
* improve error handling of failed requests
* race conditions with closing sockets and add additional safeguards
* warn on usage of private API

### [2.22.4](#) (2023-02-06)


### Bug Fixes

* Allow pointermove events when cursor capability is forbidden

### [2.22.3](#) (2023-02-06)


### Bug Fixes

* prevent processing shadow roots for non-compliant shadow root polyfills

### [2.22.2](#) (2023-02-03)


### Bug Fixes

* ensure inactive sessions are always cleared from storage
* refresh session state as part of load process


## [2.22.0](#) (2023-02-02)


### Features

* Add support for configuring ignored views
* allow new sessions to preempt existing ones
* handle text selections from the agent for both regular and input elements
* support non-FQDN socket URLs


### Bug Fixes

* cache full device frames for replay until next keyframe
* improve support for URLs with base paths

### [2.21.2](#) (2023-01-20)


### Bug Fixes

* prevent session from being started if custom data is set before starting it (ie: register: false)

### [2.21.1](#) (2023-01-19)


### Bug Fixes

* fix Safari issue caused by ShadowDOM tap

## [2.21.0](#) (2023-01-17)


### Features

* Add support for Zendesk's new web widget


### Bug Fixes

* improve support for adoptedStyleSheets when using ShadowDOM

## [2.20.0](#) (2022-12-14)


### Features

* support device capabilities


### Bug Fixes

* Ignore events on the SDK based on allowed capabilities
* re-enable improvement to send head ahead of body
* **storage:** synchronously initialise session storage clients
* suppress scroll position if not sending body

## [2.19.0](#) (2022-11-22)


### Features

* replace cbor-js with cbor-x


### Bug Fixes

* better support for nested xdoc iframes

### [2.18.1](#) (2022-11-09)


### Bug Fixes

* send force sync on navigation

## [2.18.0](#) (2022-11-08)


### Features

* send head ahead of full document sync
* support text selection


### Bug Fixes

* change focus tests to reflect the updated implementation
* do not force a sync on connect
* resend keyframe on change in frame source for running frame loops

## [2.17.0](#) (2022-10-25)


### Features

* support cross-domain session forwarding over forms

### [2.16.8](#) (2022-10-14)


### Bug Fixes

* catch null defaultView
* fix case where nested iframes could cause an error when calling CobrowseIO.stop()

### [2.16.7](#) (2022-09-29)


### Bug Fixes

* ensure redacted elements have flex-basis: unset

### [2.16.6](#) (2022-09-22)


### Bug Fixes

* avoid double fetch on session decompression
* base session token on static device token to avoid race condition
* set session as current as soon as it's created

### [2.16.5](#) (2022-08-24)


### Bug Fixes

* respect preventDefault() on key entry based events
* trigger event modifications asynchronously to provide a chance for user handlers to run first

### [2.16.4](#) (2022-08-18)


### Bug Fixes

* ensure the token header is always set of session requests

### [2.16.3](#) (2022-08-12)


### Bug Fixes

* catch errors caused by canvas serialization failures

### [2.16.1](#) (2022-07-26)


### Bug Fixes

* fix copy / paste error in french translations

## [2.16.0](#) (2022-07-25)


### Features

* add french translations
* localisation groundwork

### [2.15.3](#) (2022-07-08)


### Bug Fixes

* dependency updates
* only update input values on keydown for textareas and text inputs

### [2.15.2](#) (2022-06-30)


### Bug Fixes

* treat all ionic:// urls as localhost addresses

### [2.15.1](#) (2022-05-12)


### Bug Fixes

* always allow clearing annotations
* validate trusted origins

## [2.15.0](#) (2022-04-18)


### Features

* set full_device state as enum properties


### Bug Fixes

* avoid duplicate full device request dialogs

### [2.14.1](#) (2022-04-18)


### Bug Fixes

* fix an issue in Chrome full device video processing that could cause full device mode to fail in latest version of Chrome

## [2.14.0](#) (2022-03-29)


### Features

* expose API error ids

### [2.13.2](#) (2022-02-16)


### Bug Fixes

* propagate DOM updates to a redacted root when indirectly redacted node changes

### [2.13.1](#) (2022-02-10)


### Bug Fixes

* fix for <style> tags when used inside <svg> tags

## [2.13.0](#) (2022-02-02)


### Features

* fire loaded event the first time a session is fetched from the server


### Bug Fixes

* allow calls to update() with empty object
* ignore requests to update identical state

### [2.12.1](#) (2022-01-29)


### Bug Fixes

* fix crash caused by xdoc iframe redaction

## [2.12.0](#) (2022-01-25)


### Bug Fixes

* use cobrowse.io domain for api requests, fixes cross domain session iframe loading

### [2.11.4](#) (2021-12-08)


### Bug Fixes

* set redaction: undefined when not redacted
* treat unredacted nodes as being added


## [2.11.0](#) (2021-11-02)


### Features

* Adds initial support for cross domain cobrowsing


### Bug Fixes

* prevent notifications being processed multiple times after multiple stop/start cycles


## [2.10.0](#) (2021-08-16)


### Features

* added cbio_session_overlay class to laser and annotation UI


### Bug Fixes

* fixed localStorage check in order to fallback to in-memory or cookie based storage

### [2.9.2](#) (2021-07-13)


### Bug Fixes

* Fix an issue caused by dynamicly updating children of redacted elements

### [2.9.1](#) (2021-07-09)


### Bug Fixes

* Added NPM support. You can now load CobrowseIO via your module loader!

## [2.9.0](#) (2021-07-09)


### Features

* expose full device setter


### Bug Fixes

* use corejs 3.15

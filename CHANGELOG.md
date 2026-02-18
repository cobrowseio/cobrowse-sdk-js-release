# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.20.0](#) (2026-02-18)


### Features

* serialize interactive property to indicate interaction semantics ([#446](#)) ([b4cbdfa](#))


### Bug Fixes

* fix registration debouncing ([#469](#)) ([d83f68f](#))
* **highlight:** await highlight status from each child frame ([#466](#)) ([33afedc](#))
* **highlight:** ensure highlight is included in session recording but ignored by VA ([#472](#)) ([ead6ddc](#))

### [3.19.4](#) (2026-02-09)

### [3.19.3](#) (2026-02-09)


### Bug Fixes

* only update registration on change ([d01c424](#))

### [3.19.2](#) (2026-02-09)


### Bug Fixes

* allow setting registration when the SDK is already started ([#465](#)) ([77afc09](#))
* change how target value is updated on input events ([#459](#)) ([16cde19](#))
* include cross domain storage methods in currentSession determination, fix cross-domain indicator flash ([#463](#)) ([dfd69fd](#))
* prevent rewrite of script elements without javascript ([#464](#)) ([d969b4c](#))
* upgrade to node 24 ([85aa170](#))

### [3.19.1](#) (2026-01-28)


### Bug Fixes

* do not emit interaction events on ignored nodes ([#457](#)) ([bf2996b](#))
* prevent usage of destroyed NodeScheduler ([#456](#)) ([ab9bcfd](#))

## [3.19.0](#) (2026-01-26)


### Features

* add support for glob based trustedOrigins and cookie based session storage to improve subdomain session continuation support ([#448](#)) ([0c532eb](#))
* **amazonconnect:** add deviceId in customData ([#442](#)) ([e42e106](#))

## [3.18.0](#) (2026-01-15)


### Features

* emit debounced input events ([#440](#)) ([022bf61](#))
* end session when Genesys conversation ends ([#444](#)) ([4a76902](#))


### Bug Fixes

* prevent patching or unpatching non script elements ([#438](#)) ([3c12ffb](#))
* prevent rewrite of worker postMessage args ([#437](#)) ([9b87c1d](#))
* safely check for worker on cross origin window ([#443](#)) ([bd1cfc2](#))

## [3.17.0](#) (2026-01-09)


### Features

* close session when genesys messenger closes ([#431](#)) ([683f4d4](#))


### Bug Fixes

* don't consider aria-hidden=true as a hidden node ([#434](#)) ([1361bc0](#))
* wait for image to be ready before serializing ([#435](#)) ([098734d](#))

### [3.16.2](#) (2025-12-17)


### Bug Fixes

* **ai:** ignore untrusted clicks ([#427](#)) ([5644e97](#))
* highlight the parent if the element is zero width/height ([#412](#)) ([e6d4dab](#))
* **universal-client:** patch Request constructor to proxify url ([#426](#)) ([81aceb2](#))

### [3.16.1](#) (2025-12-10)


### Bug Fixes

* support older browsers ([#423](#)) ([4cf52b6](#))

## [3.16.0](#) (2025-12-05)


### Bug Fixes

* Add node scheduler ([#403](#)) ([ed15b3a](#))
* ignore special attributes when serializing ([#404](#)) ([5e7c4da](#))
* let api override cobrowse_device_id ([#397](#)) ([4fbd0fc](#))
* remove optimisation that prevents head reserialization ([#418](#)) ([4b41b44](#))
* support create-react-app vanilla webpack builds ([#420](#)) ([af3149d](#))
* vdom optimisations for large DOMs with frequent updates ([#406](#)) ([f6de93e](#))
* wrap name in quotes in query selector ([#401](#)) ([caf4cad](#))

## [3.15.0](#) (2025-11-19)


### Features

* expose location on window proxy ([#391](#)) ([1d1315d](#))


### Bug Fixes

* **serializer:** only mark node as hidden when its parent is not hidden ([#392](#)) ([69be1f6](#))

## [3.14.0](#) (2025-11-12)


### Features

* **highlight:** wait for navigation and network to stabilise ([#377](#)) ([49798be](#))


### Bug Fixes

* **ai:** highlight updates should not trigger widget changes when guided over the phone ([#388](#)) ([429c51b](#))
* restore CSS minification ([#387](#)) ([9d3f183](#))

### [3.13.1](#) (2025-10-31)


### Bug Fixes

* avoid redacting children of a redacted and unredacted node ([#380](#)) ([d675d84](#))
* disable css minification ([#386](#)) ([b046bff](#))
* unredaction takes precedence on conflict ([#384](#)) ([34f4fb7](#))

## [3.13.0](#) (2025-10-22)


### Features

* expose session timestamps ([#379](#)) ([1d6dfce](#))
* support multiple virtual agents ([#372](#)) ([d15e23c](#))

### [3.12.1](#) (2025-10-14)


### Bug Fixes

* include more dependencies in build ([#373](#)) ([61fec59](#))

## [3.12.0](#) (2025-10-14)


### Features

* add elevenlabs virtual agent ([#356](#)) ([2a8f235](#))


### Bug Fixes

* preserve relative URLs in anchor tags ([#370](#)) ([5a3899d](#))

## [3.11.0](#) (2025-10-03)


### Features

* expose ended_reason on Session ([#368](#)) ([3deacda](#))
* highlightElement delegate can be a promise ([#362](#)) ([0fc4922](#))


### Bug Fixes

* handle forms that have inputs called 'action' ([#367](#)) ([3145b9a](#))

## [3.10.0](#) (2025-09-17)


### Features

* store session ID in Intercom ([#360](#)) ([7ab3b31](#))


### Bug Fixes

* include all settled polyfill ([#363](#)) ([f1bc843](#))

### [3.9.1](#) (2025-09-12)


### Bug Fixes

* include body in fetch patch when using request object ([#357](#)) ([7004844](#))
* mount native select after target ([#359](#)) ([adbf92e](#))
* prevent get or set attribute on blocked properties ([#358](#)) ([bc80713](#))

## [3.9.0](#) (2025-09-11)


### Features

* support for voice and video ([#282](#)) ([77e12ca](#))


### Bug Fixes

* calling translation casing ([#348](#)) ([199c139](#))
* hide calling controls on session end ([#345](#)) ([19e32f9](#))
* include z-index on redacted elements ([#351](#)) ([f8e3406](#))
* input getSelection warning ([#355](#)) ([2be00f1](#))
* remote-error target property type ([#347](#)) ([d2fe544](#))

## [3.8.0](#) (2025-08-29)


### Features

* track change and click events ([#344](#)) ([8a9b5b3](#))

## [3.7.0](#) (2025-08-26)


### Features

* **sessions:** support element highlighting ([f307730](#))


### Bug Fixes

* **nice:** watch window.cxone.guide to trigger integration ([#343](#)) ([92ec7ea](#))

## [3.6.0](#) (2025-08-18)


### Features

* talkdesk swizzling ([#338](#)) ([4b53758](#))

### [3.5.1](#) (2025-08-15)


### Bug Fixes

* delete srcset when serialising content of image ([#341](#)) ([5fe9b6b](#))
* update consent UI styles ([#332](#)) ([ac43d6f](#))

## [3.5.0](#) (2025-07-12)


### Features

* **salesforce:** Enhanced messaging support ([#324](#)) ([11cff97](#))
* support servicenow ([#325](#)) ([4bb800e](#))
* Update default UI styles ([#323](#)) ([f603f41](#))


### Bug Fixes

* prevent error when radio group has no name ([#328](#)) ([7aad842](#))
* Prevent style leakage on UI elements ([#326](#)) ([7e075d1](#))
* tweak consent UI styles ([#330](#)) ([9e9614e](#))
* watch webGL2 canvas elements for changes ([#327](#)) ([2409988](#))

### [3.4.3](#) (2025-07-01)


### Bug Fixes

* let the user share the current tab in full device mode ([#318](#)) ([7e92fcf](#))
* prevent viewport scaling ([#320](#)) ([b882a88](#))
* safely reset compression and patch stream ([#321](#)) ([821b774](#))

### [3.4.2](#) (2025-06-11)


### Bug Fixes

* invalidate frame sync ([#317](#)) ([ac7c196](#))

### [3.4.1](#) (2025-06-06)


### Bug Fixes

* **dynamics:** avoid race conditions, watch window.Microsoft.... ([#315](#)) ([596cd3f](#))

## [3.4.0](#) (2025-06-05)


### Features

* Add Genesys messaging support ([#311](#)) ([74732ea](#))
* **dynamics:** add cobrowse device id to the chat context ([#312](#)) ([fac4c26](#))
* session quality monitoring ([#313](#)) ([7959a43](#))

### [3.3.7](#) (2025-05-19)


### Bug Fixes

* transpile cbor-x cjs dependency ([#310](#)) ([dae27a8](#))

### [3.3.6](#) (2025-05-14)


### Bug Fixes

* ensure we require the correct capabilities based on the input type ([#305](#)) ([6c4d473](#))
* ensure we select all options selected on the agent side ([9f937c0](#))
* Expose types declaration file ([#303](#)) ([9b6076f](#))
* fix a crash when setting ignoredViews to an empty array ([#308](#)) ([d0f2b26](#))
* prevent frame invalidation on every navigation ([#304](#)) ([862751f](#))
* serialize adopted styles on document ([#302](#)) ([30fba35](#))

### [3.3.5](#) (2025-04-04)


### Bug Fixes

* invalidates frames when session redaction changes ([#298](#)) ([a21e284](#))

### [3.3.4](#) (2025-03-29)


### Bug Fixes

* dispatch input event on native select ([#300](#)) ([99c34c1](#))

### [3.3.3](#) (2025-03-11)


### Bug Fixes

* use unpolyfill Event for native select ([#297](#)) ([47888f6](#))

### [3.3.2](#) (2025-03-11)


### Bug Fixes

* ensure uuid is transpiled as it uses logical nullish assignment ([#296](#)) ([022639a](#))

### [3.3.1](#) (2025-03-06)


### Bug Fixes

* fallback to root addEventListener ([#295](#)) ([8a97f8a](#))
* resolve race condition on session requests ([#291](#)) ([27adbaa](#))
* support window target on CobrowseIO.open()  ([#283](#)) ([35609f6](#))

## [3.3.0](#) (2025-02-19)


### Features

* add support for arrow and rectangle drawings ([#289](#)) ([1919342](#))

### [3.2.5](#) (2025-02-11)


### Bug Fixes

* don't serialize scroll on the html element ([#286](#)) ([5029273](#))
* rewrite background urls set on inline styles ([#287](#)) ([fac9656](#))

### [3.2.4](#) (2025-01-27)


### Bug Fixes

* create shadow of window name on top iframe ([#281](#)) ([c352c81](#))

### [3.2.3](#) (2025-01-20)


### Bug Fixes

* patch iframes that are nested in other elements ([#280](#)) ([86ea605](#))

### [3.2.2](#) (2025-01-17)


### Bug Fixes

* apply the button check to mouse down in native select ([#274](#)) ([e49b6fc](#))
* don't set Content-Type headers on outgoing GET requests ([b0e06d3](#))
* fix docker build warnings ([6a4d787](#))
* patch document write ([#276](#)) ([1afa0e7](#))
* prevent wrapper from applying on variable name ([#279](#)) ([48b85a5](#))

### [3.2.1](#) (2024-12-10)


### Bug Fixes

* debounce native select to prevent accidental selection ([#269](#)) ([ce3383c](#))
* only respond to left clicks on native select ([#272](#)) ([d430215](#))
* redaction on native select ([#271](#)) ([eeb3524](#))
* set z-index on native select ([#270](#)) ([8210ce9](#))

## [3.2.0](#) (2024-12-10)


### Features

* improve support for native select elements ([#267](#)) ([101c00a](#))


### Bug Fixes

* allow clicking through the remote cursor element ([#265](#)) ([bb9802b](#))
* duplicate evaluation in cbioGetter ([#266](#)) ([d4fffcd](#))
* fix watcher when the Zendesk widget loads after our SDK ([#263](#)) ([d921dcb](#))
* handle eval expressions ([1911991](#))

## [3.1.0](#) (2024-11-09)


### Features

* Add TypeScript declarations ([#259](#)) ([16ecccf](#))

### [3.0.3](#) (2024-11-01)


### Bug Fixes

* rewrite js global return ([#260](#)) ([653dbe6](#))
* rewrite js text content ([#261](#)) ([e5e4a40](#))

### [3.0.2](#) (2024-10-30)


### Bug Fixes

* remove iife wrapper on eval ([#258](#)) ([46d5b13](#))

### [3.0.1](#) (2024-10-30)


### Bug Fixes

* delayed shadow attachment ([#251](#)) ([509f400](#))
* patch document properties ([#254](#)) ([0655298](#))
* remove unused accessor this parameter ([#253](#)) ([7177b0a](#))
* rewrite dynamic js ([#257](#)) ([0cb6d1a](#))
* storage patch property descriptor ([#255](#)) ([cd27413](#))

## [3.0.0](#) (2024-10-27)


### ⚠ BREAKING CHANGES

* This version drops support for Cobrowse API server versions below 1.63.3. No public APIs have been changed.

### Features

* use websocket protocol based token auth ([c2763da](#))


### Bug Fixes

* expire storage items ([#249](#)) ([b95f5c6](#))
* improve storage swizzling ([#250](#)) ([9b6f174](#))
* remove unused origin param from session xdoc bridge ([d94b105](#))
* rewrite object data attribute ([#248](#)) ([bb9a22a](#))

## [2.46.0](#) (2024-10-17)


### Features

* Nice CX integration support ([#233](#)) ([78bb2d2](#))


### Bug Fixes

* change cookie name separator ([#243](#)) ([cd30105](#))
* reset universal cobrowse history ([#245](#)) ([d8f551c](#))
* support document location setter ([#247](#)) ([f98ef06](#))

## [2.45.0](#) (2024-10-11)


### Features

* add support for multiple agent annotations ([#238](#)) ([17deaef](#))
* Annotation changes including updated laser pointer and support for multiple drawings ([#234](#)) ([1e505f3](#))
* session errors ([#241](#)) ([0fb96b1](#))
* use the ripples for the remote cursor and update its cursor ([#237](#)) ([451df17](#))


### Bug Fixes

* Annotation tool improvements ([#239](#)) ([a955b48](#))
* parse JS in universal client ([#235](#)) ([f891aea](#))
* remove uneeded null handling for the remote cursor position ([#240](#)) ([17556f4](#))
* rewrite style text node ([#236](#)) ([cae4620](#))
* update Freshchat swizzling ([#242](#)) ([1cf13dd](#))

### [2.44.1](#) (2024-09-25)


### Bug Fixes

* allow intercepting navigation events in capture phase for some navigation types ([#232](#)) ([36d005c](#))
* patch insertAdjacentHTML ([#230](#)) ([3f12282](#))
* patch meta element ([#229](#)) ([5a83ff4](#))
* support WebAuthn within our iframe ([#231](#)) ([bd2bb26](#))

## [2.44.0](#) (2024-09-21)


### Features

* basic web worker rewriting ([#226](#)) ([d641d7f](#))
* patch FontFace  constructor ([#224](#)) ([5a4966f](#))


### Bug Fixes

* innerHTML patch ([#222](#)) ([6125745](#))
* move query param stripping into handlers ([#223](#)) ([dcd8bab](#))
* move responsibility for tracking parent origins to iframe bridge logic ([#217](#)) ([3919c00](#))
* only proxy http and https protocols ([#225](#)) ([d464ed0](#))

### [2.43.2](#) (2024-09-14)


### Bug Fixes

* return value in setter ([#216](#)) ([6640f56](#))

### [2.43.1](#) (2024-09-11)


### Bug Fixes

* revert element patch ([251856a](#))

## [2.43.0](#) (2024-09-11)


### Features

* add cbioImporter for parsing module imports ([#209](#)) ([f4488e9](#))
* support session unredaction selectors ([#210](#)) ([335962f](#))


### Bug Fixes

* swizzle innerHTML setter in universal cobrowse ([#211](#)) ([c10dcd4](#))

### [2.42.6](#) (2024-09-07)


### Bug Fixes

* blocked target blank navigations ([#208](#)) ([fe8d1a4](#))
* handle slow loading iframes ([55e4bd8](#))
* only send loading when target is self ([#207](#)) ([834595a](#))
* optimise doc iframe sync ([#205](#)) ([8124392](#))
* unsubscribe bridge events on stop ([53e930c](#))
* use value in getter accessor ([#206](#)) ([c0f90b8](#))

### [2.42.5](#) (2024-09-04)


### Bug Fixes

* accumulated redacted views ([#204](#)) ([f7f25a2](#))
* set view of form submission tap ([#203](#)) ([bcc09d3](#))

### [2.42.4](#) (2024-09-02)


### Bug Fixes

* proxy document location ([#201](#)) ([10c4c54](#))
* support request object in fetch ([#202](#)) ([054fbbd](#))

### [2.42.3](#) (2024-09-01)


### Bug Fixes

* improve paths within setter ([#200](#)) ([e61e15d](#))

### [2.42.2](#) (2024-08-31)


### Bug Fixes

* support ancestorOrigins in location proxy object ([#199](#)) ([04c4206](#))

### [2.42.1](#) (2024-08-30)


### Bug Fixes

* append origin to universal proxy request ([#198](#)) ([82b3808](#))
* throttle location proxy href setter ([#197](#)) ([9966f87](#))

## [2.42.0](#) (2024-08-30)


### Features

* check for open tabs before unload ([#187](#)) ([e2cfb12](#))
* handle navigation changes within universal proxy ([#166](#)) ([be0c575](#))


### Bug Fixes

* add reload to location proxy object ([#195](#)) ([2ca45e3](#))
* assign href in location proxy ([#191](#)) ([28961cc](#))
* check default prevented on navigation tracking ([#193](#)) ([8ab027e](#))
* force img overlay visibility ([41c742a](#))
* prevent confirmation if navigation is not allowed ([#189](#)) ([22cb09f](#))
* resolve setter context correctly ([#192](#)) ([40e7a25](#))
* resolve universal favicon against page ([#194](#)) ([8f4a83b](#))
* tweak default tab styling ([bd163b5](#))

## [2.41.0](#) (2024-08-20)


### Features

* support canvas quality attribute ([#185](#)) ([59b3155](#))

### [2.40.1](#) (2024-07-25)


### Bug Fixes

* update NL locale ([#182](#)) ([82960fc](#))

## [2.40.0](#) (2024-07-24)


### Features

* limit universal cookies expiry ([#172](#)) ([fcba981](#))
* rewrite source elements ([#178](#)) ([1b9fd49](#))


### Bug Fixes

* navigation tracking in reloaded same domain iframes ([#169](#)) ([2a9a7bb](#))
* prevent integrity check on fetch patch ([#176](#)) ([c116109](#))
* prevent universal and pdf links from being set after start ([#175](#)) ([0e8cd95](#))
* redacted nodes should include the id ([#173](#)) ([db6282a](#))
* rewrite location assign ([#180](#)) ([47ca856](#))
* support relative URLs within universal navigation consent ([#170](#)) ([635deb7](#))
* use capture for iframe load event ([#171](#)) ([6dd4f79](#))
* use capture for navigation events ([#179](#)) ([0e0e6d7](#))

### [2.39.2](#) (2024-07-03)


### Bug Fixes

* wait for opened event to add cobrowse buttons ([#168](#)) ([d34d573](#))

### [2.39.1](#) (2024-06-27)


### Bug Fixes

* add Cobrowse button on webchatservice restore ([#167](#)) ([d028026](#))

## [2.39.0](#) (2024-06-18)


### Features

* add universal cobrowse capability ([#162](#)) ([6d14eb1](#))
* scope and filter universal cobrowse cookies ([#159](#)) ([3399890](#))


### Bug Fixes

* only invalidateFrames when selectors change ([#163](#)) ([6cb83f1](#))
* only tap attributes getter/setters if they exist ([6598fec](#))

## [2.38.0](#) (2024-06-14)


### Features

* scope local and session storage by hostname ([#161](#)) ([156078b](#))


### Bug Fixes

* pass full URL into unproxify for message event swizzle ([#158](#)) ([89bb4f4](#))
* prevent the asset proxy path from being used ([#157](#)) ([d17661d](#))
* replace window origin references ([#160](#)) ([1d2be6a](#))

### [2.37.1](#) (2024-06-11)


### Bug Fixes

* rewrite form submission with get method ([#153](#)) ([b6f66c8](#))

## [2.37.0](#) (2024-06-07)


### Features

* rewrite img srcset attribute ([#154](#)) ([7b58e53](#))


### Bug Fixes

* improve compression of xdoc iframe content ([984ea81](#))
* tap get and set attribute ([#155](#)) ([791a1e8](#))

### [2.36.3](#) (2024-06-06)


### Bug Fixes

* block integrity attribute ([#151](#)) ([86bc469](#))
* rewrite target _top to universal cobrowse iframe name ([#152](#)) ([4bcd44c](#))

### [2.36.2](#) (2024-06-05)


### Bug Fixes

* invalidate frames on navigation after mutation observer has taken records ([#150](#)) ([ad08070](#))

### [2.36.1](#) (2024-06-05)

## [2.36.0](#) (2024-06-05)


### Features

* add universal proxy toolbar ([#135](#)) ([c923ba1](#))
* url targeted redaction ([#139](#)) ([a666da4](#))


### Bug Fixes

* ensure we have a session for allowIframeStart option ([#148](#)) ([bccb6e8](#))
* only forward specific iframe events into children ([#146](#)) ([9e73dde](#))
* prevent broadcast from sending to orphaned iframes ([#144](#)) ([b670a24](#))
* prevent proxying javascript URLs ([#143](#)) ([6282ce7](#))
* **ui:** tweak tab font ([ae6a3c8](#))
* wait for full iframe content before serialising it's children (can cause compression errors otherwise) ([08ededc](#))

## [2.35.0](#) (2024-05-24)


### Features

* sync universal client version ([#142](#)) ([fa5ae0e](#))


### Bug Fixes

* improve canvas quality ([#141](#)) ([82662ee](#))

### [2.34.2](#) (2024-05-15)

### [2.34.1](#) (2024-05-15)


### Bug Fixes

* improve canvas performance ([#137](#)) ([69b8f67](#))

## [2.34.0](#) (2024-05-11)


### Features

* integrate universal proxy ([#118](#)) ([ce77225](#))
* support active and focus pseudo selectors ([#134](#)) ([3af3a99](#))


### Bug Fixes

* close universal proxy on session end ([#132](#)) ([25f2504](#))
* **iframe:** Allow child iframe to be seen when parent iframe is a child iframe itself ([#138](#)) ([f4f2b89](#))
* prevent agent from interacting with consent dialog ([#129](#)) ([0acc835](#))
* resolve proxy url against api url ([#133](#)) ([4aecff7](#))

## [2.33.0](#) (2024-04-03)


### Features

* improve PDF Viewer resiliency ([#123](#)) ([a5ae912](#))


### Bug Fixes

* apply falsey settings from window ([#127](#)) ([b118909](#))
* prevent proxying fragments ([#126](#)) ([c04894d](#))

### [2.32.4](#) (2024-03-25)


### Bug Fixes

* fixes emojis in genesys ([#122](#)) ([a5906ca](#))

### [2.32.3](#) (2024-03-13)


### Bug Fixes

* **zendesk:** check session storage as well as local storage ([#119](#)) ([2b2bef6](#))

### [2.32.2](#) (2024-03-07)


### Bug Fixes

* prevent navigation handling when href and action is not defined ([#117](#)) ([7c1a60e](#))

### [2.32.1](#) (2024-02-29)

## [2.32.0](#) (2024-02-29)


### Features

* add support for built-in pdf cobrowsing ([46235ab](#))

### [2.31.2](#) (2024-02-21)


### Bug Fixes

* serialize document doctype ([#116](#)) ([a0d608e](#))

### [2.31.1](#) (2024-02-02)


### Bug Fixes

* include missing dependencies ([#114](#)) ([fd49eb3](#))
* register start option ([#115](#)) ([cd94bc2](#))

## [2.31.0](#) (2023-12-01)


### Features

* integrate relaxed trusted origins ([#111](#)) ([deeba46](#))


### Bug Fixes

* always attempt to use the forwarding session storage ([#112](#)) ([a0ba7f3](#))
* ensure we listen to events using the unpolyfilled addEventListener ([#110](#)) ([899e666](#))

### [2.30.2](#) (2023-11-06)

### [2.30.1](#) (2023-10-19)


### Bug Fixes

* fix remote control on some elements when using salesforce lightining components ([64ef802](#))

## [2.30.0](#) (2023-09-29)


### Features

* add support for hover detection ([#92](#)) ([700b2a3](#))

### [2.29.6](#) (2023-09-22)

### [2.29.5](#) (2023-09-12)


### Bug Fixes

* call RedactionIndex defensively so it works on headless browsers with allowHeadless falsy ([#104](#)) ([753a41e](#))
* use sdk capabilities when not available from the server ([#105](#)) ([cb3c157](#))

### [2.29.4](#) (2023-08-25)


### Bug Fixes

* calculate iframe offsets on agent ([#101](#)) ([04d77bc](#))
* calculate iframe offsets on agent ([#103](#)) ([3175b07](#))
* print warning for likely invalid 6 digit code usage ([f7ccfc1](#))

### [2.29.3](#) (2023-08-23)


### Bug Fixes

* prevent full device consent from reprompting ([#102](#)) ([d02dd28](#))

### [2.29.2](#) (2023-08-14)


### Bug Fixes

* improve focus support ([#100](#)) ([980c690](#))

### [2.29.1](#) (2023-08-07)


### Bug Fixes

* Improve redaction performance ([7b82b25](#))

## [2.29.0](#) (2023-08-04)


### Features

* Add a device ID tag on Zendesk messenger integrations ([#98](#)) ([136e840](#))
* Add more supported locales and RTL support ([#99](#)) ([d936ebb](#))
* Swizzle Sunshine Conversations widget (Smooch) ([#97](#)) ([d64341f](#))

### [2.28.1](#) (2023-07-26)


### Bug Fixes

* improve offline navigator detection ([89b159d](#))

## [2.28.0](#) (2023-07-25)


### Features

* improve monitoring of connection liveness ([9193025](#))


### Bug Fixes

* ensure we don't try to find the parent of a serialised node ([#95](#)) ([dbbd4fe](#))

## [2.27.0](#) (2023-07-14)


### Features

* respect video_codecs property for full device mode ([65cd6d7](#))

## [2.26.0](#) (2023-06-30)


### Features

* Allow redaction and unredaction within iframes ([#88](#)) ([11f2841](#))


### Bug Fixes

* Changes on the user not reflected on the agent side until a mouse interaction ([#87](#)) ([6d1873e](#))
* ensure innerHeight and innerWidth are used on mobile devices to cater for collapsing toolbars ([#89](#)) ([61c0884](#))

### [2.25.6](#) (2023-05-31)


### Bug Fixes

* **genesys:** Call updateUserData when chat window opens ([1a491ac](#))

### [2.25.5](#) (2023-05-31)

### [2.25.4](#) (2023-05-31)

### [2.25.3](#) (2023-05-26)


### Bug Fixes

* **Genesys:** Use `_genesys` window property to start genesys integration ([#85](#)) ([fdd1546](#))

### [2.25.2](#) (2023-05-22)

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

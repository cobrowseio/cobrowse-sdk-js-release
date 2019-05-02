# Supporting cross document IFrames (optional)

Please see full documentation at [https://cobrowse.io/docs](https://cobrowse.io/docs).

Try our **online demo** at the bottom of our homepage at <https://cobrowse.io/#tryit>.

## Implementation

*Note: IFrames that are not cross document are supported out-of-box without adding the SDK to the embedded page. This guide is for supporting cross document IFrames.*

To use Cobrowse for web with **cross document** IFrames you will need to add our javascript snippet to the page being embedded. You will then need to add a list of trusted origins that will be allowed to access the page content for Cobrowse purposes:


```javascript
// NOTE: this configuration should go into the page being embedded, NOT the top level page.
CobrowseIO.trustedOrigins = [
    'https://myexample.com',
    'https://my-other-website.net'
];
CobrowseIO.start();

```

It is **not** necessary for the embedded page to contain the Cobrowse license key, if provided it will be ignored.

## Questions?
Any questions at all? Please email us directly at [hello@cobrowse.io](mailto:hello@cobrowse.io).

# Cobrowse.io - Javascript SDK for Web

Cobrowse.io is 100% free and easy to try out in your own apps. Please see full documentation at [https://cobrowse.io/docs](https://cobrowse.io/docs).

Try our **online demo** at the bottom of our homepage at <https://cobrowse.io/#tryit>.

## Installation

Add this javascript snippet to the top of the `<head>` section of your website.

```html
<script>
var CobrowseLicenseKey = "<put your license key here>";
var s = document.createElement("script"); s.async = true; s.src = 'https://js.cobrowse.io/CobrowseIO.js'; document.body.appendChild(s); s.onload = function() { CobrowseIO.license = CobrowseLicenseKey; CobrowseIO.start(); };
</script>
```

### Add your license key

Please register an account and generate your free License Key at <https://cobrowse.io/dashboard/settings>.

This will associate sessions from your mobile app with your Cobrowse.io account.


### Add device metadata

To help you identify, search, and filter devices in your Cobrowse dashboard, it's helpful to specify any meaningful metadata.

You may add any custom key/value pairs you'd like, and they will all be searchable and filterable in your online dashboard. We've added a few placeholders for convenience only - all fields are optional.

```javascript
CobrowseIO.customData = {
    user_name: "Joe Blogs",
    user_id: "12345",
    user_email: "joe@example.com"
}
```

## Try it out

Once you have your Javascript snippet and license key set up, navigate to <https://cobrowse.io/dashboard> to see your device listed. You can click the "Connect" button to initiate a Cobrowse session!

**Note: Cobrowse needs to be able to access your website, so localhost addresses are not recommenced for testing. To test on a local development version, we recommend using [ngrok](https://ngrok.com/).**

## Questions?
Any questions at all? Please email us directly at [hello@cobrowse.io](mailto:hello@cobrowse.io).

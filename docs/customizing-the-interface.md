# Customizing the interface (optional)

You can fully customize the interface for a Cobrowse session. The SDK provides hooks for you to render your own interface, add these into the javascript snippet as shown below:

```html
<script>
var s = document.createElement("script"); s.async = true; s.src = 'https://js.cobrowse.io/CobrowseIO.js';
document.body.appendChild(s); s.onload = function() {
    CobrowseIO.license = "<put your license key here>";

    CobrowseIO.showSessionControls = function(session) {
        // your code
    }

    CobrowseIO.hideSessionControls = function(session) {
        // your code
    }

    CobrowseIO.start();
};
</script>
```

## Questions?
Any questions at all? Please email us directly at [hello@cobrowse.io](mailto:hello@cobrowse.io).

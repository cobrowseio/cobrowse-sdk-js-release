# Customizing the interface (optional)

You can fully customize the interface for a Cobrowse session. The SDK provides hooks for you to render your own interface:

```javascript

// make sure the client has been fully loaded
CobrowseIO.client().then(function() {
    
    CobrowseIO.showSessionControls = function(session) {
        // your code
    }

    CobrowseIO.hideSessionControls = function(session) {
        // your code
    }

});
```

## Questions?
Any questions at all? Please email us directly at [hello@cobrowse.io](mailto:hello@cobrowse.io).

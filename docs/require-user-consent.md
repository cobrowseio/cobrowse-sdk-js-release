# Requiring user consent (optional)

You may want to ask the user for permission to view their screen before starting a session. You can use the following SDK hook to render your permission dialog:

```javascript

CobrowseIO.confirmSession = function() {
    return new Promise(function(resolve, reject) {
        // replace the code below with your own confirmation prompt, calling resolve or reject as a appropriate
        if (window.confirm('Allow session?')) resolve();
        else reject();
    });
}

```

## Questions?
Any questions at all? Please email us directly at [hello@cobrowse.io](mailto:hello@cobrowse.io).

# Customizing the interface (optional)

Please see full documentation at [https://cobrowse.io/docs](https://cobrowse.io/docs).

Try our **online demo** at the bottom of our homepage at <https://cobrowse.io/#tryit>.

## Implementation

You can fully customize the interface for a Cobrowse session. The SDK provides hooks for you to render your own interface:

```javascript

CobrowseIO.showSessionControls = function() {
    // your code, i.e. $('#cobrowse-control').show() or similar
}

CobrowseIO.hideSessionControls = function() {
    // your code, i.e. $('#cobrowse-control').hide() or similar
}

```

When you override these functions, we will not show any default UI for the end-user to end their session. You can then display your own button or other UI to allow your end-user to end their session.

When implementing your own UI, you can use the following javascript code to programatically end the Cobrowse session.

```javascript

CobrowseIO.currentSession.end();

```

## Questions?
Any questions at all? Please email us directly at [hello@cobrowse.io](mailto:hello@cobrowse.io).

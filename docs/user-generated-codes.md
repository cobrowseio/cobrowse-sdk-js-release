# User-generated codes (optional)

Please see full documentation at [https://cobrowse.io/docs](https://cobrowse.io/docs).

Try our **online demo** at the bottom of our homepage at <https://cobrowse.io/#tryit>.

## Implementation

These are the requirements in Javascript to initiate sessions using 6-digit codes. More info at <https://cobrowse.io/docs#user-generated-codes>

You may expose a small UI in your app for users to generate a 6-digit code that they pass to an agent over the phone or chat to initiate a session.

```javascript

// ensure Cobrowse is loaded
CobrowseIO.client().then(function() {

    // create a code a display it to the user using your own UI
    CobrowseIO.createSessionCode().then(function(code) {
       console.log('your code is', code);
    });

});

```

## Questions?
Any questions at all? Please email us directly at [hello@cobrowse.io](mailto:hello@cobrowse.io).

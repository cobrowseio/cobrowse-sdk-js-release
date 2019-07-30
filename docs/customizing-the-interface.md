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

## Example

Here's a simple example that re-create the default UI, but with a blue button and some different text:

```html
<script>
CobrowseIO.client().then(function() {
    var button = document.createElement('div');
    button.className = '__cbio_ignored';
    button.textContent = 'End';
    button.style.fontFamily = 'sans-serif';
    button.style.padding = '10px 13px';
    button.style.fontSize = '13px';
    button.style.color = 'white';
    button.style.boxShadow = '0px 2px 5px #33333344';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '30px';
    button.style.background = 'blue';
    button.style.position = 'fixed';
    button.style.zIndex = '2147483647';
    button.style.bottom = '20px';
    button.style.left = '50%';
    button.style.transform = 'translateX(-50%)';
    button.addEventListener('click', function() {
        if (CobrowseIO.currentSession) CobrowseIO.currentSession.end();
    });

    CobrowseIO.showSessionControls = function() {
        document.body.appendChild(button);
    }

    CobrowseIO.hideSessionControls = function() {
        if (button.parentNode) button.parentNode.removeChild(button);
    }
});
</script>
```

## Questions?
Any questions at all? Please email us directly at [hello@cobrowse.io](mailto:hello@cobrowse.io).

# Cobrowse.io - Javascript SDK for Web

Cobrowse.io is 100% free and easy to try out on your own sites. Please see full documentation at [https://cobrowse.io/docs](https://cobrowse.io/docs).

Try our **online demo** at the bottom of our homepage at <https://cobrowse.io/#tryit>.

## Installation

Add this javascript snippet to the top of the `<head>` section of your website.

```html
<script>
    (function(w,t,c,p,s,e){p=new Promise(function(r){w[c]={client:function(){if(!s){
    s=document.createElement(t);s.src='https://js.cobrowse.io/CobrowseIO.js';s.async=1;
    e=document.getElementsByTagName(t)[0];e.parentNode.insertBefore(s,e);s.onload=function()
    {r(w[c]);};}return p;}};});})(window,'script','CobrowseIO');

    CobrowseIO.license = "<put your license key here>";    
    CobrowseIO.client().then(function(){
        CobrowseIO.start();
    });
</script>
```

### Add your license key

Please register an account and generate your free License Key at <https://cobrowse.io/dashboard/settings>.

This will associate sessions from your website with your Cobrowse.io account.


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

## Optional features

[Customizing the interface](./docs/customizing-the-interface.md)

[Requiring acceptance from the user](./docs/require-user-consent.md)

[Use 6-digit codes](./docs/user-generated-codes.md)

[Redact sensitive data](./docs/redact-sensitive-data.md)

[Enable cross document Iframe support](./docs/support-xdoc-iframes.md)

[IE 11 polyfills](./docs/ie-11-polyfills.md)

## Questions?
Any questions at all? Please email us directly at [hello@cobrowse.io](mailto:hello@cobrowse.io).

# Login State

Share Login State between the Sub Domains for Meteor Apps (Support for static apps too)

## Getting Started

This meteor package use for sharing login state information between apps hosted in different sub-domains. All apps are not necessory to be meteor apps. One app must be a meteor app and its login state information easialy can be share across multiple sub-domains with this.

### On Meteor App

#### Inatall

`meteor add meteorhacks:login-state`

#### Configuration

Update `settings.json` as follows. You need to provide appropriate values for `domain` and `cookineName` fields.

> Note: You must have mention the domain name in the `domain` field which you need to share the login states. 
> By entering, `.your-domain-name.com` like this, it’s allows to share the login states across all the sub domains.

```json
{
  "public": {
    "loginState": {
      "domain": “.your-domain-name.com",
      "cookieName": "app-login-state-cookie-name"
    }
  }
}
```

### On static app

Include this JavaScript file into your html document.

```javascript
<script src="https://cdn.rawgit.com/thinkholic/login-state/master/includes/login_state.js" type="text/javascript"></script>
````

Then, call `LoginState.get(cookieName)` function to get loginState. You need to provide the correct `cookieName` for that.

Here's the complete code sample;

```javascript
var loginState = LoginState.get("app-login-state-cookie-name");
if(loginState) {
  // the user has loggedIn to the meteor app
  // see the loginState Object for the addtional data
  // (append your code here!)
  console.log(loginState);
} else {
  // user has not loggedIn yet.
  // (append your code here!) 
}
```
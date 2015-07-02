# Login State

Share Login State between the Sub Domains for Meteor Apps (Support for static apps too)

## Getting Started

This meteor package use for sharing login state information between apps hosted in different sub-domains. All apps are not necessory to be meteor apps. One app must be a meteor app and its login state can be share easialy across multiple sub-domains using this package.

### On Meteor App

#### Inatall

`meteor add meteorhacks:login-state`

#### Configuration

Update `settings.json` as follows. You need to provide appropriate values for `domain` and `cookineName` fields.

> Note: You must have update the `domain` field in `settings.json`, with the domain name which you need to share login state. 
> Eg: When your domain name and landing page is `mysite.com` and `app.mysite.com` is your app subdomain and, also `supports.mysite.com` is the support forum, then you need to update `domain` field as `.mysite.com`.

```json
{
  "public": {
    "loginState": {
      "domain": ".your-domain-name.com",
      "cookieName": "app-login-state-cookie-name"
    }
  }
}
```

### On static app

#### Using custom JavaScript code


Create a JavaScript file as `js/login_state.js` or given a name as you want. After that update following code there.

```javascript
LoginState = {};

LoginState.get = function(cookieName) {
  var loginState = getCookie(cookieName);
  if(loginState) {
    return JSON.parse(decodeURIComponent(loginState));
  } else {
    return false;
  }
};

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
  }
  return "";
}
```

Include it into your html document. Then you can call `LoginState.get(cookieName)` function to get login state by providing the correct cookie name.

Here's the sample code for that;

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

#### Installing via bower

`bower install meteor-login-state`

> See: [bower](http://bower.io/)

#### Installing via NPM

`npm install meteor-login-state`

Browsers doesn't allow to run nodejs modules directly. So, you need to use [browserify](http://browserify.org/) for that.
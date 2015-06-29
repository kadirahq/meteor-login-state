# Login State

Share Login State between the Domains for Meteor Apps

## How-To

### On Meteor App

#### Inatall

`meteor add meteorhacks:login-state`

#### Configuration

Update `settings.json` as follows. You need to provide appropiate values for `domain` and `cookineName` fields.

```
  "loginState": {
    "domain": ".domain.com",
    "cookieName": "app-login-state-cookie-name"
  }
```

### On static app

Use this JavaScript code on your static app to get the `loginState` by providing corerct cookie name.

```
$(function() {
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
  
  // get loginState
  var loginState = getCookie('app-login-state-cookie-name');
  if(loginState) {
    loginState = JSON.parse(decodeURIComponent(loginState));
    console.log(loginState);
    // the user has loggedIn to the meteor app
    // see the loginState Object for the addtional data
    // (append your code here!)
  } else {
    // user has not loggedIn yet.
    // (append your code here!) 
  }
});
```
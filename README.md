# Login State

Share Login State between the Sub Domains for Meteor Apps

## How-To

### On Meteor App

#### Inatall

`meteor add meteorhacks:login-state`

#### Configuration

Update `settings.json` as follows. You need to provide appropiate values for `domain` and `cookineName` fields.

```
{
  "public": {
    "loginState": {
      "domain": ".domain.com",
      "cookieName": "app-login-state-cookie-name"
    }
  }
}
```

### On static app

Include following JavaScript file into your html document.

`<script src="https://cdn.rawgit.com/thinkholic/login-state/master/includes/login_state.js" type="text/javascript"></script>`

Then, call `getLoginState(cookieName)` function to get loginState. You need to provide the correct `cookieName` for that.

Here's the complete code sample;

```
var loginState = getLoginState("app-login-state-cookie-name");
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

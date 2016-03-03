if(!LoginState) {
  LoginState = {};
}

LoginState.getUserData = function(user) {
  return {
    username: user.username,
    userId: user._id,
    email: user.emails && user.emails[0] && user.emails[0].address
  };
}

LoginState.init = function(domain, cookieName, maxage) {
  if(typeof domain == "undefined") {
    throw new Error("domain is required for login-state");
  }

  cookieName = cookieName || "meteor-login-state";
  maxage = maxage || 365;

  Tracker.autorun(function() {
    var user = Meteor.user && Meteor.user();
    if(user) {
      var data = _.extend({
        timestamp: Date.now(),
        url: window.location.origin
      }, LoginState.getUserData(user));

      Cookie.set(cookieName, JSON.stringify(data), {
        path: "/",
        expires: maxage,
        domain: domain
      });
    } else {
      Cookie.set(cookieName, "", {
        path: "/",
        expires: -1,
        domain: domain
      });
    }
  });

  LoginState.init = function() {};
};

Meteor.startup(function() {
  var config = Meteor.settings && Meteor.settings.public && 
    Meteor.settings.public.loginState;

  if(config) {
    LoginState.init(config.domain, config.cookieName, config.maxage);
  }
});
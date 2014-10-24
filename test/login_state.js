Tinytest.add('no loggedIn user', function(test) {
  Cookie.set('aaa', 'hello', {
    path: "/",
    domain: "",
    expires: 2
  });

  test.equal(Cookie.get('aaa'), 'hello');
  LoginState.init('', 'aaa', 2);
  test.equal(Cookie.get('aaa'), undefined);
});

Tinytest.addAsync('loggedIn user', function(test, done) {
  var username = Random.id();
  Accounts.createUser({
    username: username,
    password: "password here"
  }, function(err) {
    if(err) {
      throw err;
    }
  });

  LoginState.init('', 'aaa', 2);

  Tracker.autorun(function(c) {
    if(Meteor.userId()) {
      var data = JSON.parse(decodeURI(Cookie.get('aaa')));
      test.equal(data.username, username);
      test.equal(data.url, window.location.origin);
      Meteor.logout()
      c.stop();
      Meteor.defer(done);
    }
  });
});
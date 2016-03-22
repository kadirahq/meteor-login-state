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

  function getCustomData() {
    return {aa: 10};
  }

  LoginState.init('', 'aaa', 2, getCustomData);

  Tracker.autorun(function(c) {
    if(Meteor.userId()) {
      var data = JSON.parse(decodeURI(Cookie.get('aaa')));
      test.equal(data.username, username);
      test.equal(data.url, window.location.origin);
      test.equal(data.custom, {aa: 10});
      Meteor.logout()
      c.stop();
      Meteor.defer(done);
    }
  });
});

Tinytest.add('get loginState', function(test) {
  var data = {
    timestamp: Date.now(),
    username: "testuser",
    userId: "121",
    email: "ee@sadas.lk",
    url: "http://localhost:3000/"
  };

  Cookie.set("abcd", JSON.stringify(data), {
    path: "/",
    expires: "5",
    domain: ""
  });

  var loginState = LoginState.get("abcd");

  test.equal(loginState.username, data.username);
  test.equal(loginState.userId, data.userId);
  test.equal(loginState.email, data.email);
  test.equal(loginState.url, data.url);
});

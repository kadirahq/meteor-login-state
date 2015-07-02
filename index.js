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

if(typeof module !== "undefined") {
  module.exports = LoginState;
} else {
  window.exports = LoginState;
}
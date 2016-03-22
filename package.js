Package.describe({
  "summary": "Share Meteor Login State Between Sub Domains",
  "version": "1.3.0",
  "git": "https://github.com/kadirahq/meteor-login-state.git",
  "name": "kadira:login-state"
});

Package.on_use(function(api) {
  configurePackage(api);
  api.export(['LoginState'], 'client');
});

Package.on_test(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
    'test-helpers',
    'accounts-password'
  ]);

  api.addFiles(['test/login_state.js'], 'client');
});

function configurePackage(api) {
  api.versionsFrom('1.0');
  api.use('chuangbo:cookie@1.1.0');
  api.use('tracker');
  api.use('random');
  api.addFiles([
    'client/login_state.js',
    'lib/login_state.js',
    'lib/auto_connect.js'
  ], 'client');
}

Package.describe({
  "summary": "Share Login State Between the Sub Domains",
  "version": "1.0.0",
  "git": "https://github.com/meteorhacks/login-state.git",
  "name": "meteorhacks:login-state"
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
  api.use('chuangbo:cookie@1.1.0');
  api.addFiles([
    'lib/login_state.js',
    'lib/auto_connect.js'
  ], 'client');
}

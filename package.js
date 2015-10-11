Package.describe({
  name: "jsep:accounts-trello",
  summary: "Login Trello",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'client');
  api.use('templating', 'client');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.export('Trello');

  api.addFiles(
    ['trello_configure.html', 'trello_configure.js'],
    'client');

  api.addFiles('trello_server.js', 'server');
  api.addFiles('trello_client.js', 'client');
  api.addFiles('trello_accounts.js', 'client');
});

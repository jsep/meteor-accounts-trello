Package.describe({
  name: 'jsep:accounts-trello',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Login with Trello',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jsep/meteor-accounts-trello.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('jsep:trello@0.0.2', ['client', 'server']);
  api.use([
    'practicalmeteor:loglevel@1.2.0_2',
    'practicalmeteor:chai@2.1.0_1'
  ]);

  api.use('http', ['client', 'server']);

  api.addFiles("trello.js");
  api.addFiles("trello_link.js", "client");
});
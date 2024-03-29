log = new ObjectLogger('AccountsTrello', 'debug');

Accounts.oauth.registerService('trello');

if (Meteor.isClient) {
  Meteor.loginWithTrello = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Trello.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  var autopublishedFields = _.map( Trello.whitelistedFields, function (subfield) {
    return 'services.trello.' + subfield; });
  log.debug('autopublishedFields=' + autopublishedFields);

  Accounts.addAutopublishFields({
    forLoggedInUser: autopublishedFields,
    forOtherUsers: autopublishedFields
  });
}

Meteor.linkWithTrello = function (options, callback) {
  if (!Meteor.userId()) {
    throw new Meteor.Error(402, 'Please login to an existing account before link.');
  }
  if(!Package['jsep:accounts-trello'] && !Package['jsep:trello']) {
    throw new Meteor.Error(403, 'Please include jsep:accounts-trello and jsep:trello package')
  }

  if (!callback && typeof options === "function") {
    callback = options;
    options = null;
  }

  var credentialRequestCompleteCallback = Accounts.oauth.linkCredentialRequestCompleteHandler(callback);
  Package["jsep:trello"].Trello.requestCredential(options, credentialRequestCompleteCallback);
};
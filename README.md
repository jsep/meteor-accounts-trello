# jsep:accounts-trello

Login with Trello into your meteor application.

#Installation

`meteor add jsep:accounts-trello`

#Configuration
```
ServiceConfiguration.configurations.upsert(
    { service: "trello" },
    {
      $set: {
        name: "Your app name"
        consumerKey: "your_api_key",
        secret: "your_super_scret_key",
        loginStyle: "popup" // or 'redirect'
      }
    }
  );
```
    
To get your api and secret key go [here](https://trello.com/app-key)
    
## Meteor links accounts

Also has support for meteor [links accounts](https://atmospherejs.com/bozhao/link-accounts)
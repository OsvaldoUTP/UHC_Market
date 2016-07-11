if (Meteor.isClient) {
  Template.signUp.events({
    'submit form': function(event) {
      event.preventDefault();
      var emailVar = event.target.signUpEmail.value;
      var passwordVar = event.target.signUpPassword.value;
      Accounts.createUser({
        email: emailVar,
        password: passwordVar
      });
    }
  });
  Template.login.events({
    'submit form': function(event) {
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      Session.set('user', emailVar);
      var passwordVar = event.target.loginPassword.value;
      Meteor.loginWithPassword(emailVar, passwordVar);
    }
  });
}

Template.settings.events({
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});

Template.settings.helpers({
  'send_c': function() {
    return Session.get('user');
  }
});

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}

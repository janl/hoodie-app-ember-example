import Ember from 'ember';

export default Ember.Controller.extend({
  account: Ember.inject.service('hoodie-account'),
  showSignIn: true,
  actions: {
    addLink(url) {
      this.get('store').createRecord('link', {
        title: 'Placeholder sth',
        url: url
      }).save();
      this.set('url', '');
    },
    signIn(username, password) {
      this.get('account.signIn')({username, password});
      this.set('username', '');
      this.set('password', '');
    },
    signUp(username, password) {
      var self = this;
      var signUp = this.get('account.signUp');
      var signIn = this.get('account.signIn');
      signUp({username, password})

      .then(function () {
        return signIn({username, password});
      })

      .then(function () {
        this.set('username', '');
        this.set('password', '');
        self.send('toggleForm');
      });
    },
    signOut() {
      this.get('account.signOut')();
    },
    toggleForm() {
      this.set('showSignIn', !this.get('showSignIn'));
    }
  }
});

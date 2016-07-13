import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {url: 'http://example.com', title: 'Example Domain'},
      {url: 'http://hood.ie', title: 'Hoodie – A backend for Offline First applications'}
    ];
  }
});

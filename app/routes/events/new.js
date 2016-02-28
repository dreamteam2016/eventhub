import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('event');
  },

  actions: {

    saveEvent(newEvent) {
      newEvent.save().then(() => this.transitionTo('events'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
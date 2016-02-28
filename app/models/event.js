import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	lat: DS.attr('number'),
	lng: DS.attr('number'),
	building: DS.attr('string'),
	roomNumber: DS.attr('string'),
	category: DS.belongsTo('category')
  
});

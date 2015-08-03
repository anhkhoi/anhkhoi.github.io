// http://guides.emberjs.com/v1.10.0/routing/rendering-a-template/

App = Ember.Application.create();

App.Router.map(function() {
  	this.resource('application');
});

App.ApplicationRoute = Ember.Route.extend({
	setupController: function(controller) {
		controller.set('title', 'Hello world!');
	},
	renderTemplate: function() {
		this.render({controller: 'Application'})
	}
});

App.ApplicationController = Ember.Controller.extend({
	appName: 'ddd'
});

console.log(App);
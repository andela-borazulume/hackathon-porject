'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		})

		.state('quiz', {
			url: '/quiz',
			templateUrl: 'modules/core/views/quiz.takequiz.view.html'
		}).
		state('category' ,{
			url: '/category', 
			templateUrl: 'modules/core/views/category.html'
		}).
		state('stageBeginner', {
			url: '/beginner',
			template: ''
		});
	}
]);

(function () {
    'use strict';
	angular.module('ionosApp', ['ui.router'])
		.config(config)
		.run(run);
		
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		var home = {
			name: '',
			url: '/',
			templateUrl: './login.html'
		},
		addUser = {
			name: 'adduser',
			url: '/adduser'
			templateUrl: './add-user.html'
		},
		viewUsers = {
			name: 'viewuser',
			url: '/viewuser',
			templateUrl: './view-user.html'
		},
		myProfile = {
			name: 'myprofile',
			url: '/myprofile',
			templateUrl: './my-profile.html'
		}
		
		$stateProvider.state(home);
 		$stateProvider.state(addUser);
 		$stateProvider.state(viewUsers);
 		$stateProvider.state(myProfile);
	}
});
var App = angular.module('App', [
'ngRoute',
'controllers',
'services'
]);

App.config(function($routeProvider){
	$routeProvider
	.when('/agente', {
		templateUrl: 'views/agente/index.html',
		controller: 'AgenteCtrl'
	})

	.when('/agente/create', {
		templateUrl: 'views/agente/new.html',
		controller: 'AgenteCreateCtrl'
	})

	.when('/agente/edit', {
		templateUrl: 'views/agente/edt.html',
		controller: 'AgenteCtrl'
	})
	
	.when('/tipo', {
		templateUrl: 'views/tipo/index.html',
		controller: 'TipoCtrl'
	})

	.when('/tipo/create', {
		templateUrl: 'views/tipo/create.html',
		controller: 'TipoCreatCtrl'
	})

	.when('/tipo/edit', {
		templateUrl: 'views/tipo/edit.html',
		controller: 'TipoCtrl'
	})
});

App.value('API', 'http://localhost:8080/angular-app/service/');
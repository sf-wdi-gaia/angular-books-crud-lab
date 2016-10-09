angular
	.module('library', ['ngRoute'])
	.config(config);
	//.controller('LibraryController', LibraryController);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/library',
      controllerAs: 'Library',
      controller: 'LibraryController'
    })
    .when('/albums/:id', {
      templateUrl: '/templates/book',
      controllerAs: 'Book',
      controller: 'BookController'
    })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

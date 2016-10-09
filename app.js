angular
	.module('libraryApp', ['ngRoute'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books/library.html',
      controllerAs: 'Library',
      controller: 'LibraryController'
    })
    .when('/books/:id', {
      templateUrl: 'templates/books/book.html',
      controllerAs: 'Book',
      controller: 'BookController'
    })
    // .otherwise({
    //   redirectTo: '/'
    // });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

console.log("Client Side is up and running...")

/*******************
 CLIENT-SIDE JS
 *******************/

angular
  .module('angularBooks', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/public/templates/books-all',
      controllerAs: 'BooksShowCtrl',
      controller: 'BooksShowController'
    })
    .when('/books/:id', {
      templateUrl: '/public/templates/books-detail',
      controllerAs: 'BooksDetailCtrl',
      controller: 'BooksDetailController'
    })
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}

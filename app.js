
angular
  .module('bookApp', ['ngRoute'])
  .controller('BooksIndexController', BooksIndexController)
  .controller('BooksShowController', BooksShowController)
  .config(config);


config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books.html',
      controllerAs: 'booksIndexCtrl',
      controller: 'BooksIndexController'
    })
    .when('/books/:id', {
      templateUrl: 'templates/books-show.html',
      controllerAs: 'booksShowCtrl',
      controller: 'BooksIndexController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}


BooksIndexController.$inject = ['$http'];
function BooksIndexController ($http) {
  var vm = this;
  vm.newBook = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createBook = function () {
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books',
      data: vm.newBook,
    }).then(function successCallback(response) {
      vm.books.push(response.data);
      vm.newBook = null;
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

  vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/'+book._id,
      data: book
    }).then(function successCallback(json) {
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/'+ book._id
    }).then(function successCallback(json) {
      var index = vm.books.indexOf(book);
      vm.books.splice(index,1);
      console.log(index)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }
}


BooksShowController.$inject = ['$http', '$routeParams'];
function BooksShowController ($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'+$routeParams.id
  }).then(function successCallback(json) {
    vm.book = json.data;
    console.log($routeParams.id);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
}

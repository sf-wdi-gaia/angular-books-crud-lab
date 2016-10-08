
angular
  .module('bookApp', ['ngRoute'])
  .controller('BooksIndexController', BooksIndexController)


BooksIndexController.$inject = ['$http'];
function BooksIndexController ($http) {
  var vm = this;
  vm.newBook = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    vm.books = response.data.books;
    console.log(response.data.books)
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
      // don't need to do anything!
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

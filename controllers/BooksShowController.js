
angular
  .module('bookApp', ['ngRoute'])
  .controller('BooksShowController', BooksShowController)


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

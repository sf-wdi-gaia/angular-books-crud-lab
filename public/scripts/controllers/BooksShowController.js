angular
  .module('angularBooks')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams'];
function BooksShowController (  $http,   $routeParams  ) {
  var vm = this;
  // console.log($routeParams);
  // ablumId = $routeParams.albumId;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    vm.book = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}

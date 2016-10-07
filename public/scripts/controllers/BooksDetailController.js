angular
  .module('angularBooks')
  .controller('BooksDetailController', BooksDetailController);

BooksDetailController.$inject = ['$http', '$routeParams'];
function BooksDetailController (  $http,   $routeParams  ) {
  var vm = this;
  console.log($routeParams);
  // ablumId = $routeParams.albumId;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books' + $routeParams.id
  }).then(function successCallback(response) {
    vm.book = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}

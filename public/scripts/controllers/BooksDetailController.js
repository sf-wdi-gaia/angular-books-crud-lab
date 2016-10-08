angular
  .module('angularBooks')
  .controller('BooksDetailController', BooksDetailController);

BooksDetailController.$inject = ['$http', '$routeParams'];
function BooksDetailController (  $http,   $routeParams  ) {
  var vm = this;
  // console.log($routeParams);

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/' // $routeParams.id
  }).then(function successCallback(response) {
    console.log(response.data.books);
    vm.book = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}

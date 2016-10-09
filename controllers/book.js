angular
	.module('libraryApp')
	.controller('BookController', BookController);

BookController.$inject = ['$http', '$routeParams'];

function BookController($http, $routeParams)
{
	var vm = this;
	$http(
	{
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
	}).then(function successCallback(json) {
		vm.book = json.data;
	});
}
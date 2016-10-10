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
		vm.oldbook = 
		{
			title: "",
			author: "",
			image: "",
			releaseDate: ""
		};
	});

	vm.deleteBook = function()
	{
		$http({
		  method: 'DELETE',
		  url: 'https://super-crud.herokuapp.com/books/'+ vm.book._id
		}).then(function successCallback(json) {
		  window.location.href = '/';
		}, function errorCallback(response) {
		  console.log('There was an error deleting the data', response);
		});
	}

	vm.editBook = function()
	{
		$http({
		  method: 'PUT',
		  url: 'https://super-crud.herokuapp.com/books/'+ vm.book._id,
		  data: vm.book
		}).then(function successCallback(json) {
		  window.location.href = '/';
		}, function errorCallback(response) {
		  console.log('There was an error deleting the data', response);
		});
	}

	vm.editReady = function()
	{

		vm.oldbook.title = vm.book.title;
		vm.oldbook.author = vm.book.author;
		vm.oldbook.releaseDate = vm.book.releaseDate;
		vm.oldbook.image = vm.book.image;
	}

	vm.cancelEdit = function()
	{
		vm.book.title = vm.oldbook.title;
		vm.book.author = vm.oldbook.author;
		vm.book.releaseDate = vm.oldbook.releaseDate;
		vm.book.image = vm.oldbook.image;
	}


}
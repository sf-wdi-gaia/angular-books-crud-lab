angular
	.module('library', [])
	.controller('LibraryController', LibraryController);

LibraryController.$inject = ['$http'];

function LibraryController ($http)
{
	var vm = this;
	vm.books = [];
	$http(
	{
		method: 'GET',
		url: "https://super-crud.herokuapp.com/books"
	}).then(function success(response)
		{
			//console.log(response.data);
			vm.books = response.data.books;
			console.log(vm.books);
		}, function errorCallback(response) 
		{
    		console.log('There was an error getting the data', response);
  		});
}
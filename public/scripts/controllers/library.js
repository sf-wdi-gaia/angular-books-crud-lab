angular
	.module('library')
	.controller('LibraryController', LibraryController);

LibraryController.$inject = ['$http'];

function LibraryController ($http)
{
	console.log("I'm Here");
	var vm = this;
	vm.books = [];
	vm.newBook = 
	{
		name: "",
		author: "",
		image: "",
		releaseDate: ""
	}
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

	vm.createBook = function()
	{
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
}
angular
	.module('angular-books-crud-lab', [])
	.controller('BooksIndexController', BooksIndexController);

	function BooksIndexController () {
		var vm = this;
		vm.newBook = {};

		vm.newBook = {
			vm.id = _id,
			vm.title = title,
			vm.author = author,
			vm.image = image,
			vm.releaseDate = releaseDate,
			vm.version = _v
		}
	}
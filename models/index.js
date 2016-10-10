var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/angular-books-crud-lab");

var Book = require('./book');

module.exports.Book = Book;
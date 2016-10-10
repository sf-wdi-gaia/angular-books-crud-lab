var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Book = require('./book');

var BookSchema = new Schema({
  id: String,
  title: String,
  author: String,
  image: [ String ],
  releaseDate: String,
  version = _v
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;

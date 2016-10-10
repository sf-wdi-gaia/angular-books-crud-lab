/************
 * DATABASE *
 ************/

 var db = require('../models');


 function index(req, res) {
 	db.Book.find({}, function(err, allBooks) {
 		res.json(allBooks);
 	});
 }

function create(req, res) {
  console.log('body', req.body);

  if (req.body.genres) {
    var genres = req.body.genres.split(',').map(function(item) { return item.trim(); } );
    req.body.genres = genres;
  }

  db.Book.create(req.body, function(err, book) {
    if (err) { console.log('error', err); }
    console.log(book);
    res.json(book);
  });
}

function show(req, res) {
  db.Book.findById(req.params.bookId, function(err, foundBook) {
    if(err) { console.log('booksController.show error', err); }
    console.log('booksController.show responding with', foundBook;
    res.json(foundBook);
  });
}

function destroy(req, res) {
  db.Book.findOneAndRemove({ _id: req.params.bookId }, function(err, foundBook) {
    res.json(foundBook);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Book.findById(req.params.bookId, function(err, foundBook) {
    if(err) { 
    	console.log('booksController.update error', err); 
    }
    foundBook.author = req.body.author;
    foundBook.title = req.body.title;
    foundBook.releaseDate = req.body.releaseDate;
    foundBook.save(function(err, savedBook) {
      if(err) { 
      	console.log('saving altered book failed'); 
      }
      res.json(savedBook);
    });
  });

}


 //exports public methods
 module.exports = {
 	index: index,
 	create: create,
 	show: show,
 	destroy: destroy,
 	update: update,
 };

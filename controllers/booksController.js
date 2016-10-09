/************
 * DATABASE *
 ************/

 var db = require('../models');


 // GET /api/albums
 function index(req, res) {
 	db.Book.find({}, function(err, allBooks) {
 		res.json(allBooks);
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
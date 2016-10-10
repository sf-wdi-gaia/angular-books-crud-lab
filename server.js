// SERVER-SIDE JAVASCRIPT

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(_dirname + '/public'));
app.use(bodyParser.json());

app.use('/vendor', express.static(_dirname + '/bower_components'));

var controllers = require('./controllers');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
	res.sendFile(_dirname + '/views/index.html');
});

/*
 * Template Route (not API endpoint)
 */

app.get('/templates/:name', function templates(req, res) {
	var name = req.params.name;
	res.sendFile(_dirname + '/views/templates/' + name + '.html');
});


/*
 * JSON API endpoints
*/

app.get('/api', controllers.books.index);

app.get('/api/books', controllers.books.index);

app.get('*', function homepage (req, res) {
	res.sendFile(_dirname + '/views/index.html');
});

app.post('/api/books', controllers.books.create);
app.delete('/api/books/:bookId', controllers.books.destroy);
app.put('/api/books/:bookId', controllers.books.update);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
	console.log('Express server is running on http://localhost:3000/');
});

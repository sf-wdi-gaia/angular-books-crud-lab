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

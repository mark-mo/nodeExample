var express = require('express');
var session = require('cookie-session'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser'); // Loads the piece of middleware for managing the settings
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

/* Using sessions */
app.use(session({secret: 'todotopsecret'}))

app.get('/todo', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Todo List');
});

app.post('/todo/add', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in the wine cellar. Those bottles are mine!');
});

app.post('/todo/delete/:id', function(req, res) {
    res.render('bedroom.ejs', {floor: req.params.floornum});
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page cannot be found!');
});

app.listen(8080);
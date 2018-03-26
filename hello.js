var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in reception. How can I help you?');
});

app.get('/basement', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in the wine cellar. Those bottles are mine!');
});

app.get('/floor/:floornum/bedroom', function(req, res) {
    res.render('bedroom.ejs', {floor: req.params.floornum});
});

app.get('/count/:number', function(req, res) {
    var names = ['Robert', 'Jack', 'David'];
    res.render('page.ejs', {counter: req.params.number, names: names});
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page cannot be found!');
});

app.listen(8080);
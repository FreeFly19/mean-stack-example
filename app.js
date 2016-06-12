var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/library');

var Book = mongoose.model('books', {name: String, authors: Array});

app.use(bodyParser.json());
app.use('/', express.static('public'));

app.get('/api/books', function (req, res) {
    Book.find(function (err, books) {
        res.json(books);
    });
});

app.post('/api/books', function (req, res) {
    var book = new Book(req.body);
    book.save(function (err, book) {
        res.send();
    });
});

app.listen(3000, function () {
    console.log('Application is started!');
});
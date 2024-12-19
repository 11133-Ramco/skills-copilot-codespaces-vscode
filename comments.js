// create web server
var express = require('express');
var app = express();

// create a comment
app.post('/comments', function(req, res) {
  res.status(201).json({id: 1, message: 'Comment created'});
});

// get all comments
app.get('/comments', function(req, res) {
  res.json([{id: 1, message: 'First comment'}]);
});

// get a comment by id
app.get('/comments/:id', function(req, res) {
  res.json({id: 1, message: 'First comment'});
});

// update a comment
app.put('/comments/:id', function(req, res) {
  res.json({id: 1, message: 'Comment updated'});
});

// delete a comment
app.delete('/comments/:id', function(req, res) {
  res.status(204).send();
});

// start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});
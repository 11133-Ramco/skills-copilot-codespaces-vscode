// create web server
const express = require('express');
const app = express();
const port = 3000;
// create path
const path = require('path');

// create comments
let comments = [
    {
        name: 'John',
        comment: 'Hello'
    },
    {
        name: 'Jane',
        comment: 'Hi'
    }
];

// create route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// create route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// create route
app.post('/comments', (req, res) => {
    comments.push({
        name: req.query.name,
        comment: req.query.comment
    });
    res.json(comments);
});

// create server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
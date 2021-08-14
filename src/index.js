const express = require('express');
const PORT = 3000;

var app = express();

app.get('/', (req, res) => {
    res.send('Start page');
});

app.listen(PORT, () => {
    console.log('Server started on: ' + PORT);
});
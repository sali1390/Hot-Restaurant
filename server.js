var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//-------------------------------------------------//
//--------------------Express----------------------//
//-------------------------------------------------//
var app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
})

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
})

app.listen(3000)
console.log('Listening on PORT 3000');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());

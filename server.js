var express = require('express');
var bodyParser = require('body-parser');

//-------------------------------------------------//
//--------------------Express----------------------//
//-------------------------------------------------//
var app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './home.html'));
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './reserve.html'));
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './tables.html'));
})

app.listen(3000)
console.log('Listening on PORT 3000');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());


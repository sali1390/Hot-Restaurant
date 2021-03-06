var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

//-------------------------------------------------//
//--------------------Express----------------------//
//-------------------------------------------------//
var app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var reservations = [];

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, './reserve.html'));
})

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, './tables.html'));
})


app.post('/api/tables', urlencodedParser, function (req, res){
    console.log(req.body)
    reservations.push(req.body)
    doGet(reservations)
})

function doGet(reservations){
    app.get('/api/tables', function (req, res) {
        res.send(reservations)
    })
}

app.listen(3000)
console.log('Listening on PORT 3000');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());

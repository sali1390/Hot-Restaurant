var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

//-------------------------------------------------//
//--------------------Express----------------------//
//-------------------------------------------------//
var app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var reservations = [];
var waitlist = [];

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
    if (reservations.length < 5){
    reservations.push(req.body);
    } else {
    waitlist.push(req.body);
    }
})

function doGet(superObject){
    app.get('/api/tables', function (req, res) {
        res.send(superObject)
    })
}

app.listen(3000)
console.log('Listening on PORT 3000');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());

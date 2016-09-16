var express = require('express');
var path = require('path');

var app = express();

var staticPath = path.join(__dirname,'public');
app.use(express.static(staticPath));

// get the data file from the file system via require and make it available via HTTP
var mlb = require('./data/mlb.json');
app.get('/data', function(req, res) {
    res.send(mlb);
});

app.get('/', function(req, res) {
    res.send(public);
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log('Listening on ' + port);
});

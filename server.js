var express = require('express');
var app = express();
var port = process.env.PORT || 3500;
var ejs = require('ejs');

app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname});
})

app.listen(port, function() {
    console.log("Server listening on port " + port);
})
var express = require('express');
var app = express();
var port = process.env.PORT || 3500;

app.get('/', function(req, res){
    res.end("Hello World!");
})


app.listen(port, function() {
    console.log("Server listening on port " + port);
})
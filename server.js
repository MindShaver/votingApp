var express = require('express');
var app = express();
var port = process.env.PORT || 3500;
var ejs = require('ejs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://MindShaver:bearbear@ds119718.mlab.com:19718/fcc-db');

app.use(express.static(__dirname + '/public')); // Sets our static pages path to public.
app.use(bodyParser.urlencoded({'extended':'true'})); // Lets us get our form data, and parses nicely
app.use(bodyParser.json()); // Lets us work with JSON data.
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // Parses application/vnd.api+json

app.engine('.html', require('ejs').renderFile); // Defines our default engine, in this case HTML
app.set('view engine', 'html'); // Sets our default engine, in this case HTML

var Polls = mongoose.model('poll', { 
    title: String
}) // Now all of our polls are modeled after this, and makes it easier to work with.

app.get('/api/polls', function(req, res){   // Reach out to our API and return all the polls
    Polls.find(function(err, polls) {
        if(err) throw err;
        res.json(polls);
    })
})

app.post('/api/polls', function(req, res){     // Reaches out to our API and creates polls with a POST method.
    var title = req.body.text;
    
    Polls.create(
        {
        "title": title
        }
        , function(err, data) {
                if(err) console.log(err);
                Polls.find(function(err, results) {
                    if(err) console.log(err)
                    res.json(results);
                })
            });
    });

app.delete('api/polls', function(req, res) {
    Polls.remove({
        _id : req.params.polls_id
    }, function(err, polls) {
        if(err) throw err;
        
        Polls.find(function(err, polls){
            if(err) throw err;
            
            res.json(polls);
        })
    })
})

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname});
})

app.listen(port, function() {
    console.log("Server listening on port " + port);
})
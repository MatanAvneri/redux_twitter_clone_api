"use strict";

var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');
var app = express();

let data = {
  tweets: [
    { id: 1, body: 'Hello React', timestamp: new Date() },
    { id: 2, body: 'Hello Flux++', timestamp: new Date() },
    { id: 3, body: 'Hello Redux', timestamp: new Date() }
  ]
};

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/tweets', function (req, res) {
  setTimeout(() => {
    res.json(data.tweets);
  }, 0);
});

app.post('/tweets', function (req, res) {
  let newTweet = {
    id: Date.now(),
    body: req.body.body,
    timestamp: new Date()
  }

  data.tweets.push(newTweet);
  setTimeout(() => {
    res.json(newTweet);
  }, 3000)
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

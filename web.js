var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());



app.get('/', function(request, response) {
var contents = fs.readFileSync('index.html');
var say = contents.toString();
  response.send(say);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

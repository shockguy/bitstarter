var express = require('express');

var app = express.createServer(express.logger());



app.get('/', function(request, response) {
var contents = fs.readFileSync('index.html');
var say = contents.toString();
  response.send('This is a check 0712');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

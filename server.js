var express = require('express');
var http = require('http');

var app = express();

app.get('/', function(request, response) {
	response.sendfile('./views/index.html');
});

app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);

server.listen(3000, function() {
	console.log('server running');
});
var express = require('express');
var http = require('http');

var app = express();

app.get('/about', function(request, response) {
	response.send('./views/about.html');
});

app.listen(3000);
var express = require('express');
var app = express();
var React = require('react');
require('node-jsx').install({
	harmony: true,
	extension: '.jsx'
});



app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
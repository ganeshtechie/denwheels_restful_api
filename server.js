var express = require('express');
var app = express();

var fs = require("fs");


app.all('/*', function(req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();

});


app.get("/listUsers", function(req, res){

	fs.readFile( __dirname + "/data/" + "users.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});

});


app.get("/getServiceCenters", function(req, res){

	fs.readFile( __dirname + "/data/" + "servicecenters.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});

});


app.get("/getServiceCenterDetail", function(req, res){

	fs.readFile( __dirname + "/data/" + "servicecenterdetail.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});

});





app.get('/', function (req, res) {
   res.send('Hello World.js');
})

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});
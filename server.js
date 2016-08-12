var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));


var fs = require("fs");


app.all('/*', function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();

});


app.post("/addServiceCenter", function(req, res) {

    var filename = __dirname + "/data/" + "servicecenters_entity.json";

    fs.readFile(filename, 'utf8', function(err, data) {

        var list = JSON.parse(data);

        var newServiceCenter = {
        	id: list.length + 1,
            title: req.body.name,
            address1: req.body.address1,
            address2: req.body.address2,
            address3: req.body.address3,            
            contactNo: req.body.phoneNo,
            websiteUrl: req.body.websiteUrl,
            imageUrl: req.body.imageUrl,
            searchPlaces: req.body.searchPlaces
        };

        list.push(newServiceCenter);

        fs.writeFile(filename, JSON.stringify(list), function(err, data) {
            if (err) {
                return console.log(err);
            }            
        });

        res.end("Success");
    });

});


app.get("/listUsers", function(req, res) {

    fs.readFile(__dirname + "/data/" + "users.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });

});


app.get("/getServiceCenters", function(req, res) {

    fs.readFile(__dirname + "/data/" + "servicecenters.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });

});


app.get("/getServiceCenterDetail", function(req, res) {

    fs.readFile(__dirname + "/data/" + "servicecenterdetail.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });

});





app.get('/', function(req, res) {
    res.send('Hello World.js');
})

var server = app.listen(8081, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);

});

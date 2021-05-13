'use strict';
var http = require('http');
var path = require('path');
var port = process.env.PORT || 1338;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var HomeController = require('./controller/home.js');

app.get('/', function (req, res) {
    res.render("pages/index");
});

app.get('*', function (req, res) {
    res.render("pages/error");
});

app.post('/GetProducts',HomeController.GetProducts);
app.post('/InsertProduct',HomeController.InsertProduct);
app.put('/UpdateProduct',HomeController.UpdateProduct);
app.delete('/DeleteProduct/:id',HomeController.DeleteProduct);

mongoose.connect("mongodb://localhost:27017/AIEN12DB");

app.listen(port);
console.log(`server listening on ${port}`);
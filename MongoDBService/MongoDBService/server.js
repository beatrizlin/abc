'use strict';
var express = require('express');
var port = process.env.PORT || 1337;

var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require("mongoose");
var productService = require("./api/ProductService.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cors());

//=================
app.use("/api", productService);
//=================

mongoose.connect("mongodb://localhost:27017/AIEN12DB");

app.listen(port);
console.log(`server listening on ${port}`);
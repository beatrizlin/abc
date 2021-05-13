'use strict';
var express = require('express');
var port = process.env.PORT || 1337;

var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require("mongoose");
var productService = require("./api/ProductService.js");
var memberService = require("./api/MemberService.js");
var applyService = require("./api/ApplyService.js");

var app = express();

//=================
//var mysql = require('mysql');
//var con = mysql.createConnection({
//    localhost,
//    user:"root",
//    password:"AIEN12",
//    database:"db01"

//=================

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//=================
app.use("/api", productService);
app.use("/api", memberService);
app.use("/api", applyService);
//=================

mongoose.connect("mongodb://localhost:27017/AIEN12DB");

app.listen(port);
console.log(`server listening on ${port}`);
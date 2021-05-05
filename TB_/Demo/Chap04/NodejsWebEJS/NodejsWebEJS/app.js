'use strict';
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var express = require("express")
var app = express()
var router = express.Router();

var routes = require('./routes/index');

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.listen(port);

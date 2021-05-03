'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var path = require('path')
var file = require('./routes/file.js');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var router = express.Router();
var routes = require('./routes/index.js');
var account = require("./routes/account.js");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads1')));
app.use(bodyParser.urlencoded({ extended: false }));

//======================================
routes(router);
app.use('/', router);
app.use('/account', account);
app.use('/file', file);
//======================================

app.get('*', function (req, res) {
    res.render("pages/error");
});

app.listen(port);
console.log(`server listening on ${port}`);



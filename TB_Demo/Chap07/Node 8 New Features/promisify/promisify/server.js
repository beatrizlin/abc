'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const fs = require('fs');
const util = require('util');

const readfile = util.promisify(fs.readFile);

readfile('/path/test.csv')
    .then((data) => { console.log("success"); })
    .catch((err) => { console.log("fail"); });

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

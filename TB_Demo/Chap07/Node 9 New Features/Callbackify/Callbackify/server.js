'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const { callbackify } = require("util");

const evenSuccess = n => n % 2 ? Promise.reject("odd") : Promise.resolve("even");

callbackify(evenSuccess)(1, console.log);   // "odd"
callbackify(evenSuccess)(2, console.log);   // undefined "even"

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var number = 42n; 
BigInt.prototype.toJSON = function () { return this.toString(); };
console.log(JSON.stringify({ answer: number }));                        // '{"answer":"42"}'

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

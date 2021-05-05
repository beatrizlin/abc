'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

function HelloNodeJS() {
    console.log("Hello Node.JS!");
}
console.log(HelloNodeJS.toString());

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

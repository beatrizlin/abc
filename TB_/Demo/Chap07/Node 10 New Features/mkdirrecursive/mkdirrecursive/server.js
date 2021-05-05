'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var fs = require('fs');
fs.mkdir('/path1/path2', { recursive: true }, (err) => {
    if (err) throw err;
});

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

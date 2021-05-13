'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

require('node-report')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    x = 10;
    y = 0;
    z = x / y;

    res.end('Hello World\n');
}).listen(port);

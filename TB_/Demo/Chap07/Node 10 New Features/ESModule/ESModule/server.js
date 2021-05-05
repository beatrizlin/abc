'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

import { sqrt, square } from './app.mjs';
console.log(sqrt(4));
console.log(square(2));

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

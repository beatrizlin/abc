'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const fs = require('fs');
fs.readFile('filenotexist.txt', (err, data) => {
    if (err.code === "ENOENT") {
        console.error('There was an error reading the file!', err);
        return;
    }
});

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const fs = require("fs");
fs.copyFile("firstfile.txt", "secondfile.txt", err => {
    if (err) {
        console.log(err);
    } else {
        console.log("File copied");
    }
});

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

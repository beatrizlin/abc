'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const fs = require('fs');

//process.report.reportOnFatalError = false;
//process.report.reportOnSignal = false;
//process.report.reportOnUncaughtException = true;

var contents = fs.readFile('filenotexist.txt', (err, data) => {
    if (err) {
        process.report.writeReport("Diagnostics.json", err);
        throw(err);
    }
});
console.log(contents);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

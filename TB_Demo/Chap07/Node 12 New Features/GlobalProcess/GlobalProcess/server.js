'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

console.log(process.argv);
console.log(process.env);
console.log(process.config);
console.log(process.cpuUsage());
console.log(process.cwd());
console.log(process.memoryUsage());
console.log(process.platform);
console.log(process.report.getReport());
console.log(process.uptime());
console.log(process.version);
console.log(process.versions);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

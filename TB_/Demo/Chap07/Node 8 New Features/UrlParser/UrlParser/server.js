//'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const myUrl = new URL('/a/path', 'https://example.org/');
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.href);
console.log(myUrl.origin);
console.log(myUrl.pathname);
console.log(myUrl.port);
console.log(myUrl.protocol);

var parsedUrl = new URL("https://some.site/?id=123");
console.log(parsedUrl.searchParams); // 123
console.log(parsedUrl.searchParams.get("id")); // 123


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);


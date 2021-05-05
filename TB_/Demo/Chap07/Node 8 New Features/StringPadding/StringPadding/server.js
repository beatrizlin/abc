'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

// String.prototype.padStart(targetLength [, padString])
console.log('hello'.padStart(10)); // '     hello'
console.log('hello'.padStart(10, '0')); // '00000hello'
console.log('hello'.padStart()); // 'hello'
console.log('hello'.padStart(6, '123')); // '1hello'
console.log('hello'.padStart(3)); // 'hello'
console.log('hello'.padStart(3, '123')); // 'hello';

// String.prototype.padEnd(targetLength [, padString])
console.log('hello'.padEnd(10)); // 'hello     '
console.log('hello'.padEnd(10, '0')); // 'hello00000'
console.log('hello'.padEnd()); // 'hello'
console.log('hello'.padEnd(6, '123')); // 'hello1'
console.log('hello'.padEnd(3)); // 'hello'
console.log('hello'.padEnd(3, '123')); // 'hello';

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

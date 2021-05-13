'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const { isDeepStrictEqual } = require('util');
const UtilisEqual = isDeepStrictEqual({ a: '1' }, { a: 1 });
console.log(UtilisEqual);	                                    //false

const { deepStrictEqual } = require('assert')
const AssertisEqual = deepStrictEqual({ a: '1' }, { a: 1 });      // throw new errors.AssertionError

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

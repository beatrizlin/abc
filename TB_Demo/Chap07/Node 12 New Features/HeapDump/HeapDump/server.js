'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const heapdump = require('heapdump');

const server = http.createServer((req, res) => {
    if (req.url === '/heapdump') {
        heapdump.writeSnapshot((err, filename) => {
            console.log('Heap dump written to', filename)
        });
    }
    res.end('Hello World\n');
}).listen(port);


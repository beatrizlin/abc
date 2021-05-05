'use strict';
const http2 = require('http2');
const fs = require('fs');

function onRequest(req, resp) {
    resp.end("Hello World");
}
var port = process.env.PORT || 1337;

const server = http2.createSecureServer({
    key: fs.readFileSync('/MyCertificates/localhost-privkey.pem'),
    cert: fs.readFileSync('/MyCertificates/localhost-cert.pem')
}, onRequest);

server.listen(port);
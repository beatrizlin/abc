'use strict';
const fs = require('fs');
const express = require('express');
const spdy = require('spdy');

const app = express();

app.get('*', (req, res) => {
    res.status(200).json({ message: 'ok' })
})

var port = process.env.PORT || 1337;

const server = spdy.createServer({
    key: fs.readFileSync('/MyCertificates/localhost-privkey.pem'),
    cert: fs.readFileSync('/MyCertificates/localhost-cert.pem')
}, app).listen(port);
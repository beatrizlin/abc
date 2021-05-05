'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var customer = {
    name: "John",
    age:20
};

const fsPromises = require('fs').promises;                          // or require('fs/promises') in v10.0.0
fsPromises.writeFile('customer.json', JSON.stringify(customer))
  .then(() => {
    console.log('JSON saved');
  })
  .catch(er => {
    console.log(er);
  });

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

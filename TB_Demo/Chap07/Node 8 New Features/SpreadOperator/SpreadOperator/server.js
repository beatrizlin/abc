'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [...arr1, 9]
console.log(arr2) // expected output: [1,2,3,4,5,6,9]

const userCarData = {
    type: 'ferrari',
    color: 'red'
};

const userSettingsData = {
    lastLoggedIn: '12/03/2019',
    featuresPlan: 'premium'
};

const userData = {
    ...userCarData,
    name: 'Youssef',
    ...userSettingsData
};
console.log(userData);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

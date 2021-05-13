'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

function fetchHouseData() {
    return new Promise(resolve => setTimeout(() => resolve("Mansion"), 1000));
}

function fetchCarData() {
    return new Promise(resolve => setTimeout(() => resolve("Ferrari"), 1000));
}

async function serial() {
    const house = await fetchHouseData();   // Wait one second
    const car = await fetchCarData();       // Wait another second.
    console.log(house, car, " in series");
}
serial();

async function parallel() {
    const houseDataPromise = fetchHouseData();
    const carDataPromise = fetchCarData();
    const house = await houseDataPromise; // Wait one second for both
    const car = await carDataPromise;
    console.log(house, car, " in parallel");
}
parallel();


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

class Counter {
    #count = 0;
    name = "MyCounter";

    increment() {
        this.#count++;
    }

    get value() {
        return this.#count;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.name);
console.log(counter.value); // 1

console.log(counter.#count); // 無法取用

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

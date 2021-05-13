'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

function someFunction() {
    console.log('Hello Performance Hook!');
}

const {
    performance,
    PerformanceObserver
} = require('perf_hooks');

const fn = performance.timerify(someFunction);

const obs = new PerformanceObserver((list) => {
    console.log(list.getEntries()[0].duration);
    obs.disconnect();
    //performance.clearFunctions();
});
obs.observe({ entryTypes: ['function'] });

// A performance timeline entry will be created
fn();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

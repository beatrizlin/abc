'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const perf = require('execution-time')();
var prime = require("./prime.js");

const min = 2;
const max = 1e7;

//single thread
perf.start();	
var primes = prime.generatePrimes(min, max);
const endtime = perf.stop();
console.log(endtime.time);  
//console.log(primes.join('\n'));
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

////worker thread
//const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
//if (isMainThread) {
//    const threadCount = 2;
//    const threads = new Set();
//    let results = [];
//    console.log(`Running with ${threadCount} threads...`);
//    const range = Math.ceil((max - min) / threadCount);
//    let start = min;
//    perf.start();	
//    for (let i = 0; i < threadCount - 1; i++) {
//        const myStart = start;
//        threads.add(new Worker(__filename, { workerData: { start: myStart, range } }));
//        start += range;
//    }
//    threads.add(new Worker(__filename, { workerData: { start, range: range + ((max - min + 1) % threadCount) } }));
//    for (let worker of threads) {
//        worker.on('error', (err) => { throw err; });
//        worker.on('exit', () => {
//            threads.delete(worker);
//            console.log(`Thread exiting, ${threads.size} running...`);
//            if (threads.size === 0) {
//                const endtime = perf.stop();
//                console.log(endtime.time);
//                //console.log(results.join('\n'));
//            }
//        });
//        worker.on('message', (msg) => {
//            results = results.concat(msg);
//        });
//    }
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    }).listen(port);
} else {
    var primes=prime.generatePrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}

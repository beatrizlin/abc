
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

const trace_events = require('trace_events'); 
const tracing = trace_events.createTracing({ categories: ['node.environment'] });

http.createServer(function (req, res) {
    tracing.enable();  //Enable trace event capture for 'node.environment'

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');

    tracing.disable(); //Disable trace event capture for 'node.environment'
}).listen(port);

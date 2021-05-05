'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var fs = require('fs');
var asyncHooks = require('async_hooks');

function init(asyncId, type, triggerId) {
    fs.writeSync(1, `${type} \n`);
}

var hooks = {
    init: init,
    //before: before,
    //after: after,
    //destroy: destroy
};
var asyncHook = asyncHooks.createHook(hooks);

asyncHook.enable();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

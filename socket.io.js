#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app');
var http = require('http');
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '23333');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Create socket.io server.
 */

var io = require('socket.io')(server);

/**
 * Bind connection event.
 */

server.listen(port);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}


module.exports = server;
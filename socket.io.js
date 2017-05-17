#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app');









/**
 * Bind connection event.
 */

io.use(function(socket, next) {
    var handshakeData = socket.request;
    console.log(handshakeData);
    // make sure the handshake data looks good as before
    // if error do this:
    // next(new Error('not authorized'));
    // else just call next
    next();
});

// io.use(function(handshakeData, callback) {
//     // 通过客户端的cookie字符串来获取其session数据

//     handshakeData.cookie = cookieParser(handshakeData.headers.cookie)
//     var connect_sid = handshakeData.cookie['connect.sid'];
//     console.log(handshakeData.cookie);
//     if (connect_sid) {
//         storeMemory.get(connect_sid, function(error, session) {
//             if (error) {
//                 // if we cannot grab a session, turn down the connection
//                 callback(error.message, false);
//             } else {
//                 // save the session data and accept the connection
//                 handshakeData.session = session;
//                 callback(null, true);
//             }
//         });
//     } else {
//         callback('nosession');
//     }
// });

io.on('connection', function(socket) {
    // console.log('a user connected:' + JSON.stringify(socket.handshake));
});

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
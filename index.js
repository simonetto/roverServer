//https://socket.io/get-started/chat
//https://github.com/131/h264-live-player
//https://fullstack.network/streaming-video-from-raspberrypi-to-the-network-using-node-js-33a5b6b78c3d
'use strict'
const RoverServer = require('./rover-server')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server);
const spawn = require('child_process').spawn;
//const child = spawn('/opt/vc/bin/raspivid', ['-hf', '-w', '1280', '-h', '1024', '-t', '999999999', '-fps', '20', '-b', '5000000', '-o', '-']);
const html = __dirname + '/public';
const port = 4000;
const rover = new RoverServer();

app
    .use(compression())
    .use(bodyParser.json())
    // Static content
    .use(express.static(html))
    // Start server
    .listen(port, () => {
        console.log('Port: ' + port);
        console.log('Html: ' + html);
    });

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('joystick', msg => {
        rover.onMove(msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const videoServer = http.createServer((request, response) => {
    child.stdout.pipe(response);
});

//video server
videoServer.listen(3001, () => {
    console.log('listening video on *:3001');
});

//socket listen
server.listen(3000, () => {
    console.log('listening on *:3000');
});

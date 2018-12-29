import * as http from 'http';
import * as express from 'express';
//import * as socketIo from 'socket.io'
// const io2 = require('socket.io')();
// import {messageSent} from "./services/messageService";

var mongoose = require('mongoose');

import router from './router';
import {mongoURI, port} from "./config";

const server = http.createServer(router);
//const io = socketIo(http)

router.use(express.json());

mongoose.connect(mongoURI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB')
})

server.listen(port, ()=>console.log("server is running on port"+port));
// io2.on('connection', function(socket) {
//     console.log('a user connected');
//
//     socket.on('disconnect', function () {
//         console.log('a user is disconnected');
//     });
//     socket.on('sendMessage', function (groupId,msg) {
//         //io2.sockets.emit('updateClients',msg)
//         //update db
//         messageSent(groupId,msg).then((groups)=>{
//             io2.sockets.emit('updateClients',groups)
//         })
//
//     });
// })
//
//
// io2.listen(4001 );

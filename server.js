"use strict";
exports.__esModule = true;
var http = require("http");
var express = require("express");
//import * as socketIo from 'socket.io'
// const io2 = require('socket.io')();
// import {messageSent} from "./services/messageService";
var mongoose = require('mongoose');
var router_1 = require("./router");
var config_1 = require("./config");
var server = http.createServer(router_1["default"]);
//const io = socketIo(http)
router_1["default"].use(express.json());
mongoose.connect(config_1.mongoURI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
server.listen(config_1.port, function () { return console.log("server is running on port" + config_1.port); });
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

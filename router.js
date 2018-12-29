"use strict";
exports.__esModule = true;
var express = require("express");
//import * as routes from './routes';
var Cors = require("cors");
var usersRouter_1 = require("./routes/usersRouter");
var contractsRouter_1 = require("./routes/contractsRouter");
var propertiesRouter_1 = require("./routes/propertiesRouter");
var app = express();
app.use(Cors());
app.use(express.json());
app.get('/', function (req, res) {
    res.send("Hello World");
});
app.use('/users', usersRouter_1["default"]);
app.use('/contracts', contractsRouter_1["default"]);
app.use('/properties', propertiesRouter_1["default"]);
exports["default"] = app;

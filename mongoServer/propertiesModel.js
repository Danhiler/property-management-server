"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var unit = new Schema({
    id: String,
    name: String
});
var PropertySchema = new Schema({
    name: String,
    address: String,
    type: String,
    units: [unit],
    id: String,
    userId: String
});
exports["default"] = mongoose.model('Property', PropertySchema);

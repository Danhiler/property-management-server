"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    phone: String,
    id: String
});
exports["default"] = mongoose.models.User || mongoose.model('User', userSchema);

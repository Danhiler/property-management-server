"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ContractSchema = new Schema({
    tenantName: String,
    startDate: Date,
    endDate: Date,
    paymentDay: Number,
    monthlyPayment: Number,
    paymentMethod: String,
    propertyId: String,
    rentedUnitsIds: [String],
    id: String,
    userId: String
});
exports["default"] = mongoose.models.Group || mongoose.model('Contract', ContractSchema);

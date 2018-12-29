import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ContractSchema = new Schema({
    tenantName: String,
    startDate: Date,
    endDate: Date,
    paymentDay: Number,
    monthlyPayment: Number,
    paymentMethod: String,
    propertyId: String,
    rentedUnitsIds: [String],
    id: String,
    userId: String,
})


export default mongoose.models.Group || mongoose.model('Contract', ContractSchema);

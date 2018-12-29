import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const unit = new Schema({
    id: String,
    name: String
})
const PropertySchema = new Schema({
    name: String,
    address: String,
    type: String,
    units: [unit],
    id: String,
    userId: String,
})

export default mongoose.model('Property', PropertySchema);

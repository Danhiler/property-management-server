import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
phone:String,
    id:String
});

export default mongoose.models.User || mongoose.model('User', userSchema);

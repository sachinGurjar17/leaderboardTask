const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    totalPoints:{type:Number , default:0}
})

const HistorySchema = new mongoose.Schema({
    userName: {type:String},
    points: {type: Number},
    timestamp:{type:Date , default:Date.now}
})

const User = mongoose.model('User',UserSchema)
const History = mongoose.model('History',HistorySchema)

module.exports ={
    User,
    History
}
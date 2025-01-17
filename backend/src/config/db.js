const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async ()=>{
    try{
        const mongoUrl = process.env.MONGO_URI     
        await mongoose.connect(mongoUrl)
        console.log("DB connected ")
    }catch(error){
        console.log(`DB not connecterd : ${error}`)
    }
}

module.exports = connectDB
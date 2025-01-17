const dotenv = require('dotenv')
const express = require('express')
const connectDB = require('./config/db')
const app = require('./app')
const cors = require('cors')
dotenv.config();
connectDB();

app.use(cors)
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`server is listening at port ${PORT}`)
})
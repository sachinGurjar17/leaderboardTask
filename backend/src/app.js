const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json())

const userRoutes = require('./routes/user')
const pointRoutes = require('./routes/points')

app.use('/api',userRoutes)
app.use('/api',pointRoutes)

module.exports = app
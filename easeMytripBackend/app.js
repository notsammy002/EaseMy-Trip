
const express = require('express')
const cors = require('cors')
const Flightrouter = require('./routes/flightsRouter')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/flights',Flightrouter)






module.exports = app

const express = require('express')
const Flightrouter = require('./routes/flightsRouter')
const app = express()


app.use(express.json())

app.use('/flights',Flightrouter)






module.exports = app
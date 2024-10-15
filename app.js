const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const docRoute = require('./routers/documentRouter')
const elasticClient = require('./client')

mongoose.connect('mongodb+srv://ikeholy65:ir6ycEO0OaC54D2n@codextestdb.mpnp3.mongodb.net/?retryWrites=true&w=majority&appName=codexTestDB')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/documents",docRoute)


module.exports = app
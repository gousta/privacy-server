require('dotenv').config()

const express = require('express')
const app = express()
const configuration = require('./config')
const middleware = require('./middleware')

// Set Middleware
app.use(middleware)

// Routes
app.get('/', (req, res) => {
  res.json({status: 'ok'})
})

// Start Server
app.listen(configuration.port)
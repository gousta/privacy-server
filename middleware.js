const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('./config')

// Middleware Definitions
const json = bodyParser.json()

const cors = cors()

const logRequest = (req, res, next) => { // LOG MIDDLEWARE
  logger.info(`[${req.method}] ${req.originalUrl}`)
  next()
}

const authenticate = (req, res, next) => { // AUTHENTICATE MIDDLEWARE
  // next should be called only if authentication passes
  next()
}

// Export middleware
module.exports = [json, cors, logRequest, authenticate]
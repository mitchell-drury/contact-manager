const db = require('./dbconnection')

db.query('CREATE EXTENSION IF NOT EXISTS CITEXT');

// register models
require('./models/associations')

module.exports = db
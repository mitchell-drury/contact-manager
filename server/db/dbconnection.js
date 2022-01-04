const Sequelize = require('sequelize')

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/reactCalendar', {
    "logging": false,
    "dialect": "postgres",
    "username": "menqpalmeargts",
    "password": "d7a9def64c6083e35faaa5affeeb5239a200069d9c8d8f032936decbe529c9de",
    "dialectOptions": {
      "ssl": true
    },
    "ssl": true
  }
)

module.exports = db

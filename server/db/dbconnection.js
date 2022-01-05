const Sequelize = require('sequelize')
let db;

if (process.env.PORT) {
  db = new Sequelize(process.env.DATABASE_URL, {
    "dialect": "postgres",
    "username": "menqpalmeargts",
    "password": "d7a9def64c6083e35faaa5affeeb5239a200069d9c8d8f032936decbe529c9de",
    "dialectOptions": {
      "ssl": ssl
    },
    "ssl": ssl
  })
} else {
  db = new Sequelize('postgres://localhost:5432/reactCalendar', {
    logging: false
  })
}

module.exports = db

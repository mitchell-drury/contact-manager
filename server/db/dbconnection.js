const Sequelize = require('sequelize')
let db;

if (process.env.PORT) {
  db = new Sequelize(process.env.DATABASE_URL, {
    "dialect": "postgres",
    "username": "srwmuzmcicvztg",
    "password": "def11a6ce1ec4174a9189c3c477265dce26086949a7fa9edaf847319538b4f89",
    "dialectOptions": {
      "ssl": "ssl"
    },
    "ssl": "ssl"
  })
} else {
  db = new Sequelize('postgres://localhost:5432/reactCalendar', {
    logging: false
  })
}

module.exports = db

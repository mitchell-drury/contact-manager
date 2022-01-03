const Sequelize = require('sequelize')
const db = require('../dbconnection.js');

const Contact = db.define('contact', {
    firstName:{
      type: Sequelize.CITEXT
    },
    lastName:{
      type: Sequelize.CITEXT,
      allowNull: false
    },
    phoneNumber:{
      type: Sequelize.STRING
    }
});

module.exports = Contact;
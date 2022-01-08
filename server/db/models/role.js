const Sequelize = require('sequelize')
const db = require('../dbconnection.js');

const Role = db.define('role', {
    role:{
      type: Sequelize.CITEXT
    }
});

module.exports = Role;
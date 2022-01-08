const Sequelize = require('sequelize')
const db = require('../dbconnection.js');

const Region = db.define('region', {
    region:{
      type: Sequelize.CITEXT
    }
});

module.exports = Region;
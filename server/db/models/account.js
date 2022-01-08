const Sequelize = require('sequelize');
const db = require('../dbconnection.js');

const Account = db.define('account', {
    primaryUser:{
      type: Sequelize.CITEXT
    }
});

module.exports = Account;
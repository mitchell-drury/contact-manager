const Sequelize = require('sequelize');

const Contact = require ('./contact.js');
const User = require ('./user.js');
const Region = require ('./region.js');
const Role = require ('./role.js');
const Account = require ('./account.js');

//set associations here
User.belongsTo(Account);
Role.belongsTo(Account);
Region.belongsTo(Account);
Contact.belongsTo(Account);

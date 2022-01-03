#!/usr/bin/env node
//const crypto = require('crypto');
const Contact = require ('./models/contact.js');


let contacts = [
    {firstName: 'Mitchell', lastName: 'Drury', phoneNumber: '345546456'},
    {firstName: 'Jane', lastName: 'Doe', phoneNumber: '45634523'},
    {firstName: 'Ted', lastName: 'Williams'},
    {firstName: 'John', lastName: 'Kim', phoneNumber:'1234134'},
    {firstName: 'Jason', lastName: 'Blues', phoneNumber: '1343463676'}
];

Contact.bulkCreate(contacts);




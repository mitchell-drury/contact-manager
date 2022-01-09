const express = require('express');
const contactsRouter = express.Router();
const db = require('./db/dbsetup.js');
const Contact = require('./db/models/contact.js');

contactsRouter.get('/', (req, res) => {
    Contact.findAll({
        order: ['lastName']
    })
    .then(contacts => {res.json(contacts)});
});
contactsRouter.post('/add', (req, res) => {
    Contact.create(req.body)
        .then((contact) => {
            if (contact.dataValues.createdAt) {
                res.status(200).json(contact.dataValues);
            }else{
                res.status(500).json({'Error message': 'Contact Not Added'})
            }
        });
})
contactsRouter.post('/update', (req, res) => {
    Contact.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber
    }, {
        where: {
            id: req.body.id
        }
    })
    .then((contact) => {
        if (contact[0] === 1) {
            res.status(200).json({'message': 'One record updated'});
        } else {
            res.status(500).json({'Error message:': 'No contacts updated'})
        }
    })
})

module.exports = contactsRouter;
const express = require("express");
const path = require("path");
const bp = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const db = require('./db/dbsetup.js');
const Contact = require('./db/models/contact.js');

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.get('/contacts', (req, res) => {
    console.log('fetching all');
    res.json([{'firstName': 'mitch'}])
    // Contact.findAll({
    //     order: ['lastName']
    // })
    // .then(contacts => {res.json(contacts)});
})
app.post('/contacts/add', (req, res) => {
    Contact.create(req.body)
        .then((contact) => {
            if (contact.dataValues.createdAt) {
                res.status(200).json(contact.dataValues);
            }else{
                res.status(500).json({'Error message': 'Contact Not Added'})
            }
        });
})
app.post('/contacts/update', (req, res) => {
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

db.sync({force:false});
app.listen(port, () => {
    console.log(`server up ${port}`);
})
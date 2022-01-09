const express = require('express');
const apiRouter = express.Router();
const contactsRouter = require('./contactsRouter');

apiRouter.use('/contacts', contactsRouter);
//apiRouter.use('/regions', regionsRouter);

module.exports = apiRouter;
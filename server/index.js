const express = require("express");
const path = require("path");
const bp = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const apiRouter = require('./apiRouter');
const db = require('./db/dbsetup.js');

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

db.sync({force:true});
app.listen(port, () => {
    console.log(`server up ${port}`);
})
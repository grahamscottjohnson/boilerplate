const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const { db } = require('./db');

const app = express();

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', require('./api'));

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

//handle 404
app.use( (req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

//handle Error
app.use( (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error');
})

const start = async () => {
    const PORT = process.env.PORT || 3000
    await db.sync();
    app.listen(PORT, () => {
        console.log('Running on port: ' + PORT);
    })
}

start();

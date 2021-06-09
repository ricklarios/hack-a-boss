const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

let response = {};

app.use((req, res, next) => {
    req.timestamp = new Date();
    next();
});

app.use((req, res, next) => {
    console.log(req.timestamp);
    response = { ...response, timestamp: req.timestamp };
    next();
});

app.get('/hola', (req, res) => {
    res.status(200);
    response = { ...response, mensaje: 'Hola mundo!' };
    res.send(response);
});

app.get('/express', (req, res) => {
    res.status(200);
    response = { ...response, mensaje: 'Hola express!' };
    res.send(response);
});

app.use((req, res) => {
    res.status(200);
    response = { ...response, mensaje: req.url };
    res.send(response);
});

app.listen(3000, () => console.log('Puerto activo: 3000'));

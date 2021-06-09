const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/hola', (req, res) => {
    res.status(200);
    res.send({ mensaje: 'Hola mundo!' });
});

app.get('/express', (req, res) => {
    res.status(200);
    res.send({ mensaje: 'Hola express!' });
});

app.use((req, res) => {
    res.send(req.url);
});

app.listen(3000, () => console.log('Puerto activo: 3000'));

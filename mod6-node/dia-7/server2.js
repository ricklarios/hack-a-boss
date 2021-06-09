const express = require('express');
const morgan = require('morgan');
const app = express();

// app.use(morgan('combined'));
app.use(morgan('dev')); // Esto es un middleward y se ejecutará siempre

app.get('/api/saludos/mundo', (req, res) => {
    // Este 'endpoint' sólo responde a la ruta '/api/saludos/mundo' y método GET
    res.send({ mensaje: 'Hola mundo!' });
});

app.get('/api/saludos/express', (req, res) => {
    res.send('Hola Express');
});

app.listen(3000, () => console.log('Escuchando!'));

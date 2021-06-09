const express = require('express');
const app = express();

app.get('/hola', (req, res) => {
    res.status(200);
    res.send({ mensaje: 'Hola mundo!' });
});

app.listen(3000, () => console.log('Puerto activo: 3000'));

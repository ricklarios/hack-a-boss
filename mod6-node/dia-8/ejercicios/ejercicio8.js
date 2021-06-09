const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
    res.status(200);
    res.send(req.query);
});

app.listen(3000, () => console.log('Ejercicio 8 IS ALIVE!'));

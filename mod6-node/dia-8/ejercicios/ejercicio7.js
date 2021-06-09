const express = require('express');

const app = express();

app.get('/api/users/:userId/photos/:id', (req, res) => {
    res.status(200);
    res.send(req.params);
});

app.listen(3000, () => console.log('Ejercicio 7 IS ALIVE!'));

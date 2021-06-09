const express = require('express');

const app = express();

// app.use((req, res) => res.send('Hello express!'));
//app.use((req, res) => res.send({ name: 'David' }));

// Middleward: tienes los parámetros (req, res, next):

app.use((req, res, next) => {
    console.log('Middleward 1');
    next();
});

app.use((req, res, next) => {
    console.log('Middleward 2');
    if (req.headers.authorization === 'supersecreto') {
        // Middlewars de acceso
        next();
    } else {
        res.statusCode = 401;
        res.end('Identificación incorrecta');
    }
});
app.use((req, res) => {
    console.log('Middleward 3');
    res.statusCode = 200;
    res.end('Wellcome!!!');
});

app.listen(3000, () => {
    console.log('Server ON!');
});

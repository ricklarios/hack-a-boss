require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

const { PORT } = process.env;

// Logger ('morgan' es un logger):
app.use(morgan('dev'));

// Traducimos el body (deserializamos) a un objeto JavaScript.
app.use(express.json());

app.listen(PORT, () =>
    console.log(`Server listening al http://localhost:${PORT}`)
);

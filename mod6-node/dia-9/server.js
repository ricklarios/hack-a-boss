require('dotenv').config(); // Requerimos "dotenv"y llamamos al método "config".

const express = require('express');
const morgan = require('morgan');

// Obtenemos la variable PORT:
// eslint-disable-next-line no-undef
const { PORT } = process.env;

// Controladores
const getStories = require('./controllers/getStories');
const getStory = require('./controllers/getStory');
const newStory = require('./controllers/newStory');
const editStory = require('./controllers/editStory');

const app = express();

// Middleware que lee el body de tipo "raw"
app.use(express.json());

// Middleware que nos da info sobre la petición
app.use(morgan('dev'));

/* 
    ###############
    ## ENDPOINTS ##
    ###############
*/

// Obtener todos los relatos.
app.get('/stories', getStories);

// Obtener info concreta de un relato
app.get('/stories/:idStory', getStory);

// Insertar un nuevo relato.
app.post('/stories', newStory);

// Editar un relato.
app.put('/stories/:idStory', editStory);

/* 
    ##################################
    ## Middleware Error & Not Found ##
    ################################## 
*/

// Middleware de errores
app.use((error, req, res, next) => {
  // El 'next' lo no usamos, pero es obligatorio!!!
  console.log(error);
  res
    .status(error.httpStatus || 500)
    .send({ status: 'error', message: error.message });
});

// Middleware de Not Found

app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: ' Not Found!!',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

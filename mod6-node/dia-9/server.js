require('dotenv').config(); // Requerimos "dotenv"y llamamos al método "config".

const express = require('express');
const morgan = require('morgan');

// Obtenemos la variable PORT:
// eslint-disable-next-line no-undef
const { PORT } = process.env;

// Middlewares importados:
const storyExists = require('./middlewares/storyExists');
const userExists = require('./middlewares/userExists');
const userAuth = require('./middlewares/userAuth');

// Controladores importados:
// STORIES
const {
    getStories,
    getStory,
    newStory,
    editStory,
    deleteStory,
} = require('./controllers/stories'); // Por defecto busca un archivo 'index.js', no hace falta meter toda la ruta
// USERS
const {
    getUser,
    newUser,
    loginUser,
    editUser,
    userPass,
    deleteUser,
} = require('./controllers/users');

const app = express();

/* 
    ################
    ## MIDDLEWARE ##
    ################
*/

// Middleware que lee el body de tipo "raw"
app.use(express.json());

// Middleware que nos da info sobre la petición
app.use(morgan('dev'));

/* 
    ###############
    ## ENDPOINTS ##
    ###############
*/

// ################ STORIES ENDPOINTS ################
// Obtener todos los relatos.
app.get('/stories', getStories);

// Obtener info concreta de un relato
app.get('/stories/:idStory', storyExists, getStory);

// Insertar un nuevo relato.
app.post('/stories', userAuth, newStory);

// Editar un relato.
app.put('/stories/:idStory', userAuth, storyExists, editStory);

// Borrar un relato
app.delete('/stories/:idStory', userAuth, storyExists, deleteStory);

// ################ USERS ENDPOINT ################
// Obtener la info de un usuario.
app.get('/users/:idUser', userExists, getUser);

// Crear un usuario:
app.post('/users', newUser);

// Loguear un usuario.
app.post('/users/login', loginUser);

// Editar usuario:
app.put('/users', userAuth, editUser);

// Editar contraseña:
app.put('/users/password', userAuth, userPass);

// Eliminar usuario:
app.delete('/users', userAuth, deleteUser);

/* 
    ##################################
    ## Middleware Error & Not Found ##
    ################################## 
*/

// Middleware de errores
app.use((error, req, res, next) => {
    // El 'next' lo no usamos, pero es obligatorio!!!
    console.log(error);
    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
    });
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

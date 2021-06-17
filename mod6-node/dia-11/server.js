require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

const app = express();

const { PORT } = process.env;

// Importamos los middlewares:
const entryExists = require('./middlewares/entryExists');
const canEdit = require('./middlewares/entryExists');
const userExists = require('./middlewares/userExists');
const authUser = require('./middlewares/authUser');

// Controladores de entrada:
const {
    listEntries,
    getEntry,
    newEntry,
    voteEntry,
    editEntry,
    deleteEntry,
    addEntryPhoto,
    deleteEntryPhoto,
} = require('./controllers/entries');

// Controladores de usuario
const {
    getUser,
    newUser,
    validateUser,
    loginUser,
    editUser,
    editUserPass,
    recoverUserPass,
    resetUserPass,
    deleteUser,
} = require('./controllers/users/index.js');

// Logger ('morgan' es un logger):
app.use(morgan('dev'));

// Traducimos el body (deserializamos) a un objeto JavaScript.
app.use(express.json());

// Nos permite leer bodies en formato "form-data"
app.use(fileUpload());

/* 
    ########################
    ## Endpoints Entradas ##
    ########################
*/

// Obtener listado de entradas:
app.get('/entries', listEntries);

// Obtener una entrada en concreto
app.get('/entries/:idEntry', entryExists, getEntry);

// Creamos una nueva entrada:
app.post('/entries', authUser, newEntry);

// Votar una entrada:
app.post('/entries/:idEntry/votes', authUser, entryExists, voteEntry);

// Editar una entrada:
app.put('/entries/:idEntry', authUser, entryExists, canEdit, editEntry);

// Eliminar una entrada
app.delete('/entries/:idEntry', authUser, entryExists, canEdit, deleteEntry);

// añadir una imagen a una entrada
app.post(
    '/entries/:idEntry/photos',
    authUser,
    canEdit,
    entryExists,
    addEntryPhoto
);

// Eliminar una imagen.

app.delete(
    '/entries/:idEntry/photos/:idPhoto',
    authUser,
    entryExists,
    canEdit,
    deleteEntryPhoto
);

/* 
    ########################
    ## Endpoints Usuarios ##
    ########################
*/

// Crear un nuevo usuario.
app.post('/users', newUser);

// Validar un usuario en concreto.
app.get('/users/validate/:registrationCode', validateUser);

// Obtener info de un usuario en concreto.
app.get('/users/:idUser', authUser, userExists, getUser);

// Login de usuario.
app.post('/users/login', loginUser);

// Editar nombre, email y avatar de usuario:
app.put('/users/:idUser', authUser, userExists, editUser);

// Editar contraseña de usuario
app.put('/users/:idUser/password', authUser, userExists, editUserPass);

// Enviar correo de recuperación
app.put('/users/password/recover', recoverUserPass);

// Resetear contraseña
app.put('/users/password/reset', resetUserPass);

// Eiliminar usuario
app.delete('/users/:idUser', authUser, userExists, deleteUser);

/* 
    #######################
    ## Error & Not Found ##
    #######################
*/

// Middleware de error:
app.use((error, req, res, next) => {
    console.error(error);
    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
    });
});

// Middleware de Not Found.
app.use((req, res) => {
    res.status(400).send({
        status: 'error',
        message: 'Not Found',
    });
});

app.listen(PORT, () =>
    console.log(`Server listening al http://localhost:${PORT}`)
);

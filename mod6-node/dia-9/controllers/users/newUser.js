// **POST** - [/users] - Crear un usuario.

const path = require('path');
const { writeFile } = require('../../helpers');

const users = require('../../bbdd/users.json');
const usersPath = path.join(__dirname, '../../bbdd/users.json');

const newUser = async (req, res, next) => {
    // añadimos next para lanzar un error
    try {
        // Obtenemos la info del body
        const { email, password } = req.body;
        // Si alguna propiedad no existe lanzamos un error:
        if (!email || !password) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400; // Creamos una nueva propiedad de 'error'
            throw error;
        }
        const repeatedEmail = users.find((user) => user.email === email);
        if (repeatedEmail) {
            const error = new Error('Ya existe un usuario con ese email');
            error.httpStatus = 400; // Creamos una nueva propiedad de 'error'
            throw error;
        }

        users.push({
            id: users.length + 1,
            role: 'member',
            ...req.body,
            deleted: false,
        });

        await writeFile(usersPath, JSON.stringify(users));

        res.send({
            status: 'Ok',
            message: 'Usuario creado',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = newUser;

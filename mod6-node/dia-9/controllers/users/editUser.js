// **PUT** - [/users/:idUser] - Editar datos de usuario.

const path = require('path');
const { writeFile } = require('../../helpers');
const usersPath = path.join(__dirname, '../../bbdd/users.json');

const users = require('../../bbdd/users.json');

const editUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { id } = req.userAuth;

        if (!email) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        users[id - 1].password = password;

        writeFile(usersPath, JSON.stringify(users));

        res.send({
            status: 'Ok',
            message: 'Usuario editado',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = editUser;

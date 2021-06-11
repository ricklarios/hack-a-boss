const path = require('path');
const { writeFile } = require('../../helpers');
const usersPath = path.join(__dirname, '../../bbdd/users.json');

const users = require('../../bbdd/users.json');

const userPass = async (req, res, next) => {
    try {
        const { currentPassword, newPassword_A, newPassword_B } = req.body;
        const { id } = req.userAuth;

        if (!currentPassword || !newPassword_A || !newPassword_B) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        const user = users.find((user) => user.id === id);
        if (user.password !== currentPassword) {
            const error = new Error('Contraseña incorrecta');
            error.httpStatus = 400;
            throw error;
        }
        if (newPassword_A !== newPassword_B) {
            const error = new Error('Las contraseñas deben ser iguales');
            error.httpStatus = 400;
            throw error;
        }

        users[id - 1].password = newPassword_A;

        writeFile(usersPath, JSON.stringify(users));

        res.send({
            status: 'Ok',
            message: 'Contraseña editada',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = userPass;

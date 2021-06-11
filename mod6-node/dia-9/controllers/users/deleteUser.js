const path = require('path');
const { writeFile } = require('../../helpers');
const usersPath = path.join(__dirname, '../../bbdd/users.json');
const users = require('../../bbdd/users.json');

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.userAuth;

        const user = users.find((user) => user.id === Number(id));

        if (user.id !== id && role !== 'admin') {
            const error = new Error('No tienes permisos');
            error.httpStatus = 401;
            throw error;
        }

        users[id - 1].deleted = true;

        await writeFile(usersPath, JSON.stringify(users));

        res.send({
            status: 'ok',
            message: 'Usuario eliminado',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = deleteUser;

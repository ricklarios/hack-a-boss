// **GET** - [/users/:idUser] - Obtener info de un usuario.

const users = require('../../bbdd/users.json');

const getUser = (req, res, next) => {
    try {
        const { idUser } = req.params;

        // Seleccionamos el usuario con el id correspondiente
        const user = users.find((user) => {
            return user.id === Number(idUser);
        });

        res.send(user);
    } catch (error) {
        next(error);
    }
};

module.exports = getUser;

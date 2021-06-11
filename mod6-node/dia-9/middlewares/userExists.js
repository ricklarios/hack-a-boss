const users = require('../bbdd/users.json');

const userExists = (req, res, next) => {
    try {
        const { idUser } = req.params;

        // Obtenemos el relato (si existe)
        const user = users.find((user) => {
            return user.id === Number(idUser) && !user.deleted;
        });

        // Si el relato no existe => error
        if (!user) {
            const error = new Error('El usuario no existe');
            error.httpStatus = 400;
            throw error;
        }

        // Le pasamos el control al siguiente middleware o endpoint
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = userExists;

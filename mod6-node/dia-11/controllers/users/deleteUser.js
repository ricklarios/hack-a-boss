const getDB = require('../../bbdd/db');

const {
    generateRandomString,
    formatDate,
    deletePhoto,
} = require('../../helpers');

const deleteUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idUser } = req.params;

        //Comprobamos que idUser no sea 1 (el administrador)
        if (Number(idUser) === 1) {
            const error = new Error('El administrador no puede ser eliminado');
            error.httpStatus = 403;
            throw error;
        }

        // Comprobamos si el usuario no es el propio usuario y no es administrador
        if (
            req.userAuth.idUser !== Number(idUser) &&
            req.userAuth.role !== 'admin'
        ) {
            const error = new Error(
                'No tienes permisos para eliminar este usuario'
            );
            error.httpStatus = 401;
            throw error;
        }

        // SI todo esta bien, procedemos
        // 1. Eliminamos el avatar
        const [user] = await connection.query(
            `SELECT avatar FROM users WHERE id = ?;`,
            [idUser]
        );
        if (user[0].avatar) {
            await deletePhoto(user[0].avatar);
        }
        await connection.query(
            `UPDATE users 
            SET password = ?, name = "[deleted]", avatar = NULL, active = 0, deleted = 1, modifiedAt = ? 
            WHERE id = ?;`,
            [generateRandomString(40), formatDate(new Date()), idUser]
        ); // Guardamos la contraseña aleatoria por seguridad

        res.send({
            status: 'ok',
            message: 'Usuario eliminado',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteUser;

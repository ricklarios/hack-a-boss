const { finance } = require('../bbdd/db');

const canEdit = async (req, res, next) => {
    let connection;
    try {
        const { idEntry } = req.params;
        // Recogemos el propietario
        const [owner] = await connection.query(
            `SELECT idUser FROM entries WHERE id = ?`,
            [idEntry]
        );
        // Comprobamos que el que edita sea el dueño de la entrada o el administrador
        if (
            owner[0].idUser !== req.userAuth.idUser &&
            req.userAuth.role !== 'admin'
        ) {
            const error = new Error('No tienes permisos');
            error.httpStatus = 401;
            throw error;
        }
        next();
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = canEdit;

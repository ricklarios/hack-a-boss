const getDB = require('../bbdd/db');

const entryExists = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idEntry } = req.params;

        // Constante que recibirá un array con la lista de entradas:
        const [entry] = await connection.query(
            `
            SELECT id FROM entries WHERE id = ?;
        `,
            [idEntry]
        );

        // Si existe la entrada 'entry', tendrá una longitud mínima de 1
        if (entry.length < 1) {
            const error = new Error('Entrada no encontrada');
            error.httpStatus = 404;
            throw error;
        }

        next();
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = entryExists;

const getDB = require('../../bbdd/db');
const { deletePhoto } = require('../../helpers');

const deleteEntry = async (req, res, next) => {
    let connection;
    try {
        connection = await getDB();

        const { idEntry } = req.params;

        // Seleccionamos las fotos relacionadas con la entrada:
        const [photos] = await connection.query(
            `SELECT photo FROM entries_photos WHERE idEntry = ?;`,
            [idEntry]
        );

        // Borramos las posibles fotos de la BD
        await connection.query(
            `DELETE FROM entries_photos WHERE idEntry = ?;`,
            [idEntry]
        );

        // Borramos las posibles fotos del servidor/carpeta
        for (const photoInfo of photos) {
            await deletePhoto(photoInfo.photo);
        }

        // Borramos los posibles votos
        await connection.query(`DELETE FROM entries_votes WHERE idEntry = ?;`, [
            idEntry,
        ]);

        // Borramos la entrada
        await connection.query(`DELETE FROM entries WHERE id = ?;`, [idEntry]);

        res.send({
            status: 'ok',
            message: `La entrada con id ${idEntry} ha sido eliminada.`,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteEntry;

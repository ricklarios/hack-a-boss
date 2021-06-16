// DELETE - [entries/:idEntry/photos/:idPhoto] - Elimina una foto de un entrada.

const getDB = require('../../bbdd/db');
const { deletePhoto } = require('../../helpers');

const deleteEntryPhoto = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idEntry, idPhoto } = req.params;

        const [photoInfo] = await connection.query(
            `SELECT photo FROM entries_photos WHERE id = ? AND idEntry = ?`,
            [idPhoto, idEntry]
        );

        if (photoInfo.length < 1) {
            const error = new Error('La foto no existe');
            error.httpStatus = 404;
            throw error;
        }

        await deletePhoto(photoInfo[0].photo); // 1. Borramos la foto del servidor
        await connection.query(
            `DELETE FROM entries_photos WHERE id = ? AND idEntry = ?`,
            [idPhoto, idEntry]
        ); // Borramos la foto de la BD

        res.send({
            status: 'ok',
            message: 'Imagen eliminada',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteEntryPhoto;

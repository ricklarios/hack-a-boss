const getDB = require('../../bbdd/db');

const { savePhoto, formatDate } = require('../../helpers');

const addEntryPhoto = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idEntry } = req.params;

        // Comprobamos primero cuantas fotos tiene nuestra entrada:
        const [entryPhotos] = await connection.query(
            `SELECT id FROM entries_photos WHERE idEntry = ?;`,
            [idEntry]
        );

        // Si tiene 3 o más fotos en una entrada
        if (entryPhotos.length >= 3) {
            const error = new Error('No puedes subir más fotos');
            error.httpStatus = 403;
            throw error;
        }

        // Guardamos la foto nueva. Las fotos nos vienen por req.files
        let savedPhoto;

        if (req.files && req.files.photo) {
            // Guardamos la foto en el servidor y obtenemos el nombre con la que la guardamos
            savedPhoto = await savePhoto(req.files.photo);

            await connection.query(
                `INSERT INTO entries_photos (photo, idEntry, createdAt) VALUES (?, ?, ?);`,
                [savedPhoto, idEntry, formatDate(new Date())]
            );
        }

        res.send({
            status: 'ok',
            data: {
                photo: savedPhoto,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = addEntryPhoto;

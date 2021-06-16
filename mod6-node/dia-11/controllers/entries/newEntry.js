const getDB = require('../../bbdd/db');
const { formatDate, savePhoto } = require('../../helpers');

const newEntry = async (req, res, next) => {
    try {
        connection = await getDB();

        const { place, description } = req.body;
        const { idUser } = req.userAuth;

        const now = new Date();

        // Insertamos los campos
        const [newEntry] = await connection.query(`
        INSERT INTO entries (createdAt, place, description, idUser)
        VALUES ("${formatDate(
            new Date()
        )}", "${place}", "${description}", ${idUser});
    `);
        // Obtentemos el id de la entrada
        const { insertId: idEntry } = newEntry;

        // Comprobamos si el usuario está introduciendo fotos con la entrada
        const photos = []; // Creamos un array vacío
        if (req.files) {
            for (const photoData of objest.values(req.files).slice(0, 3)) {
                // Guardamos la imagen en el disco y obtenemos su nombre
                const photoName = await savePhoto(photoData);
                photos.push(photoName);
                // Guardamos la foto en la BD:
                await connection.query(
                    `INSERT INTO entries_photos (photo, idEntry, createdAt) VALUES (?, ?, ?)`,
                    [photoNAme, idEntry, formatDate(now)]
                );
            }
        }

        res.send({
            status: 'ok',
            data: {
                id: idEntry,
                idUser,
                place,
                description,
                createdAt: now,
                votes: 0,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = newEntry;

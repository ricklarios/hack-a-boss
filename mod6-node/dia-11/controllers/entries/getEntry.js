const getDB = require('../../bbdd/db');

const getEntry = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idEntry } = req.params;

        // Obtenemos la información de la entrada.
        const [entry] = await connection.query(
            `
            SELECT entries.id, entries.place, entries.description, entries.createdAt, entries.idUser, AVG(IFNULL(entries_votes.vote, 0)) AS votes
            FROM entries
            LEFT JOIN entries_votes ON (entries.id = entries_votes.idEntry)
            WHERE entries.id = ?;
        `,
            [idEntry]
        );
        // Obtenemos la información de las fotos asignadas a la entrada
        const [photos] = await connection.query(
            `SELECT id, photo, createdAt FROM entries_photos WHERE idEntry = ?`,
            [idEntry]
        );

        res.send({
            status: 'ok',
            data: {
                ...entry,
                photos,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getEntry;

// GET - [/entries] - Retorna el listado de entradas(viajes).

const getDB = require('../../bbdd/db');

const listEntries = async (req, res, next) => {
    // Intentamos conectarnos a la base de datos:
    let connection;
    try {
        connection = await getDB();

        const { search, order, direction } = req.query;

        const validOrderFields = ['place', 'date', 'votes'];
        const validOrderDirection = ['DESC', 'ASC'];

        // Establecemos el orden por defecto (por la columna 'votes') si no está definido
        const orderBy = validOrderFields.includes(order) ? order : 'votes';
        // stablecemos el orden por defecto (por la columna 'direction') si no está definido
        const orderDirection = validOrderDirection.includes(direction)
            ? direction
            : 'ASC';

        // Obtenemos los resultados:
        let results;

        if (search) {
            // Hacemos destructuring porque connection.query devuekve un array con los resultados en la primera posición
            [results] = await connection.query(
                `
                SELECT entries.id, entries.place, entries.createdAt, entries.idUser, AVG(IFNULL(entries_votes.vote, 0)) AS votes
                FROM entries
                LEFT JOIN entries_votes ON (entries.id = entries_votes.idEntry)
                WHERE entries.place LIKE ? OR entries.description LIKE ?
                GROUP BY entries.id, entries.place, entries.createdAt, entries.idUser
                ORDER BY ${orderBy} ${orderDirection};
            `,
                [`%${search}%`, `%${search}%`]
            );
        } else {
            [results] = await connection.query(
                `
                SELECT entries.id, entries.place, entries.createdAt, entries.idUser, AVG(IFNULL(entries_votes.vote, 0)) AS votes
                FROM entries
                LEFT JOIN entries_votes ON (entries.id = entries_votes.idEntry)
                GROUP BY entries.id, entries.place, entries.createdAt, entries.idUser
                ORDER BY ${orderBy} ${orderDirection};
            `
            );
        }

        res.send({
            status: 'ok',
            data: results,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = listEntries;

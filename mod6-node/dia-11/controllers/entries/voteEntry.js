// POST - [/entries/:idEntry/votes] - Vota una entrada.

const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');

const voteEntry = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idEntry } = req.params;
        const { vote } = req.body;
        const { idUser } = req.userAuth;

        // Comprobamos que los votos están entre 1 y 5:
        if (vote < 1 || vote > 5) {
            const error = new Error('El voto debe estar entre 1 y 5');
            error.httpStatus = 400;
            throw error;
        }

        // Comprobamos que el usario que crea la entrada la vote
        // Obtenemos primero el usuario q la creó
        const [owner] = await connection.query(
            `
        SELECT idUser FROM entries WHERE id = ?;`,
            [idEntry]
        );

        if (owner[0].idUser === idUser) {
            const error = new Error('No puedes votar tu propia entrada');
            error.httpStatus = 403;
            throw error;
        }

        // Comprobamos que el usuario no haya votado anterioremente:
        const [alreadyVote] = await connection.query(
            `SELECT id FROM entries_votes WHERE idUser = ? AND idEntry = ?`,
            [idUser, idEntry]
        );

        // Si la longitud de alreadyVote es mayor que 0 el usuario ya ha votado.
        if (alreadyVote.length > 0) {
            const error = new Error('Ya votaste esta entrada anterioremente');
            error.httpStatus = 403;
            throw error;
        }

        // Añadimos el voto a la tabla.
        await connection.query(
            `INSERT INTO entries_votes (createdAt, vote, idUser, idEntry) VALUES (?, ?, ?, ?)`,
            [formatDate(new Date()), vote, idUser, idEntry]
        );
        // Obtenemos la nueva media
        const [newAvg] = await connection.query(
            `SELECT AVG(entries_votes.vote) AS votes
            FROM entries_votes 
            WHERE entries_votes.idEntry = ?;`,
            [idEntry]
        );
        res.send({
            status: 'ok',
            data: {
                votes: newAvg[0].votes,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = voteEntry;

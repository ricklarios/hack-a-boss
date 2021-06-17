const getDB = require('../../bbdd/db');

const { fotmatDate } = require('../../helpers');

const editEntry = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        // Obtenemos los datos que vamos a permitir editar: 'descripción' o 'lugar'
        const { description, place } = req.body;
        const { idEntry } = req.params;
        // const { idUser } = req.userAuth;

        // const [owner] = await connection.query(
        //     `SELECT idUser FROM entries WHERE id = ?`,
        //     [idEntry]
        // );
        // // Comprobamos que el que edita sea el dueño de la entrada
        // if (owner[0].idUser !== idUser) {
        //     const error = new Error('No tienes permisos');
        //     error.httpStatus = 401;
        //     throw error;
        // }

        // Comprobamos si no hay algún dato:
        if (!description && !place) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        const [entry] = await connection.query(
            `
        SELECT place, description FROM entries WHERE id = ?
        `,
            [idEntry]
        );

        // Si recibimos 'place' o 'description' nos quedamos ese valor. Si no el valor que tenían
        // place = place ? place : entry[0].place;
        place = place || entry[0].place;
        description = description || entry[0].description;

        // Fecha de modificación:
        const now = new Date();

        // Actualizamos la entrada:
        await connection.query(
            `UPDATE entries SET place = ?, description = ?, modifiedAt = ? WHERE id = ?`,
            [place, description, formatDate(new Date()), idEntry]
        );

        res.send({
            satatus: 'ok',
            data: {
                id: idEntry,
                place,
                description,
                modifiedAt: now,
            },
        });
    } catch (error) {
        next(error);
    } finally {
    }
};

module.exports = editEntry;

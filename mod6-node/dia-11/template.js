const getDB = require('../../bbdd/db');

const getUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getUser;

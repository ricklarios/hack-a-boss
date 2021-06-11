const fs = require('fs').promises;

const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
    } catch (error) {
        const err = new Error('Problema al procesar los datos');
        err.httpStatus = 500;
        throw err;
    }
};

module.exports = { writeFile };

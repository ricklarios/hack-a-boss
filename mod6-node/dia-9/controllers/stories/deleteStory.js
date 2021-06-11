const stories = require('../../bbdd/stories.json');
// const fs = require('fs').promises;
const { writeFile } = require('../../helpers');
const path = require('path');
const storiesPath = path.join(__dirname, '../../bbdd/stories.json');

const deleteStory = async (req, res, next) => {
    try {
        const { idStory } = req.params;

        // Comprobamos si el usuario NO es el dueño de la historia o NO es admin.
        const { id, role } = req.userAuth;
        if (idUser !== id && role !== 'admin') {
            const error = new Error('No tienes permisos');
            error.httpStatus = 401;
            throw Error;
        }

        // Accedemons a la posición del Array donde se encuentra el relato y cambiamos 'deleted' a true
        stories[idStory - 1].deleted = true;

        await writeFile(storiesPath, JSON.stringify(stories));

        res.send({
            status: 'ok',
            message: 'Relato eliminado',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = deleteStory;

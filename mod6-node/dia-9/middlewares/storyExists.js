const stories = require('../bbdd/users.json');

const storyExists = (req, res, next) => {
    try {
        const { idStory } = req.params;

        // Obtenemos el relato (si existe)
        const story = stories.find((story) => {
            return story.id === Number(idStory) && !story.deleted;
        });

        // Si el relato no existe => error
        if (!story) {
            const error = new Error('El relato no existe');
            error.httpStatus = 400;
            throw error;
        }

        // Le pasamos el control al siguiente middleware o endpoint
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = storyExists;

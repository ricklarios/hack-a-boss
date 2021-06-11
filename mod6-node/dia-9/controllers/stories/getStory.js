const stories = require('../../bbdd/stories.json');

const getStory = (req, res, next) => {
    try {
        const { idStory } = req.params;

        // Seleccionamos el relato con el id correspondiente
        const story = stories.find((story) => {
            return story.id === Number(idStory);
        });

        res.send(story);
    } catch (error) {
        next(error);
    }
};
module.exports = getStory;

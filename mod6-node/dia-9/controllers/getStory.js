const stories = require('../bbdd/stories.json');

const getStory = (req, res) => {
  const { idStory } = req.params;

  // Seleccionamos el relato con el id correspondiente
  const story = stories.find((story) => story.id === Number(idStory));
  res.send(story);
};
module.exports = getStory;

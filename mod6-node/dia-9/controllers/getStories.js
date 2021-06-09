const stories = require('../bbdd/stories.json');

const getStories = (req, res) => {
  res.status(200);
  res.send(stories);
};

module.exports = getStories;

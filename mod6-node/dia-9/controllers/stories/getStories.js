const stories = require('../../bbdd/stories.json');

const getStories = (req, res) => {
    res.status(200);
    res.send(stories.filter((story) => !story.deleted));
};

module.exports = getStories;

const listEntries = require('./listEntries');
const getEntry = require('./getEntry');
const newEntry = require('./newEntry');
const voteEntry = require('./voteEntry');
const editEntry = require('./editEntry');
const deleteEntry = require('./deleteEntry');
const addEntryPhoto = require('./addEntryPhoto');
const deleteEntryPhoto = require('./deleteEntryPhoto');

module.exports = {
    listEntries,
    getEntry,
    newEntry,
    voteEntry,
    editEntry,
    deleteEntry,
    addEntryPhoto,
    deleteEntryPhoto,
};

const getUser = require('./getUser');
const newUser = require('./newUser');
const validateUser = require('./validateUser');
const loginUser = require('./loginUser');
const editUser = require('./editUser');
const editUserPass = require('./editUserPass');
const recoverUserPass = require('./recoverUserPass');

module.exports = {
    getUser,
    newUser,
    validateUser,
    loginUser,
    editUser,
    editUserPass,
    recoverUserPass,
};

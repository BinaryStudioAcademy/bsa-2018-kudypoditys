const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Message = orm.define('message', {
    body: {
        type: Sequelize.TEXT

    }
});

module.exports = Message;


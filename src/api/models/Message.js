const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Message = orm.define('messsage', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Message;
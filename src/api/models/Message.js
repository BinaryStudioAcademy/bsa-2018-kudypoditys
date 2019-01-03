const Sequelize = require('sequelize'),
    orm = require('../orm');

const Message = orm.define('message', {
    body: {
        type: Sequelize.TEXT
    }
});

Message.associate = function (models) {
    Message.belongsTo(models.Reservation);
};

module.exports = Message;


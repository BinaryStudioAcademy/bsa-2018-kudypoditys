const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('rooms', {
    price: {
        type: Sequelize.INTEGER
    },
    amount: {
        type: Sequelize.INTEGER
    },
    area: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    }
});

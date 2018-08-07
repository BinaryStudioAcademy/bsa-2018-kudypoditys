const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('paymentType', {
    name: {
        type: Sequelize.STRING
    }
});
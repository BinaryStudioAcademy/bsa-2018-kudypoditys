const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('verificationStatu', {
    status: {
        type: Sequelize.STRING
    }
});
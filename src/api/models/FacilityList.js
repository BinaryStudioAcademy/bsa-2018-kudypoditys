const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('facilityList', {
    name: {
        type: Sequelize.STRING
    }
});
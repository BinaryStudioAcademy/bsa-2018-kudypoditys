const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('facilityCategory', {
    name: {
        type: Sequelize.STRING
    }
});
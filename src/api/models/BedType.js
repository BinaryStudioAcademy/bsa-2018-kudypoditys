const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('bedType', {
    name: {
        type: Sequelize.STRING
    }
});

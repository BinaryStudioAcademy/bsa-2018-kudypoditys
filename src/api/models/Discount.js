const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('discount', {
    discountRate:{
        type: Sequelize.FLOAT
    }
});

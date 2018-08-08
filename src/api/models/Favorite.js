
const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Property = require('./Property'),
    User = require('./User')

let Favoritе = orm.define('favoritе', {

});

Favoritе.belongsTo(User);
Favoritе.belongsTo(Property);

module.exports = Favoritе;
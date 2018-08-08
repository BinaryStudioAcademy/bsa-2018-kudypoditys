
const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Property= require('./Property'),
    User= require('./User')

let Favority = orm.define('favority', {

});

Favority.hasMany(User);
Favority.belongsTo(Property);

module.exports = Favority;
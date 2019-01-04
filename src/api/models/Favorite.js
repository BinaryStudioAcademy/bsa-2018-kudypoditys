
const orm = require('../orm');

const Favorite = orm.define("favorite", {

});

Favorite.associate = function (models) {
    Favorite.belongsTo(models.User);
};

module.exports = Favorite;
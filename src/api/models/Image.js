const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Property = require('./Property'),
    Room = require('./Room');

let Image = orm.define('image', {
    url: {
        type: Sequelize.STRING,
        validate:{ isUrl: true}
    }
});

Image.belongsTo(Property);
Image.belongsTo(Room);

module.exports = Image;
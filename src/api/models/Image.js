const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Image = orm.define('image', {
    url: {
        type: Sequelize.STRING,
        validate:{ isUrl: true}
    }
});

module.exports = Image;
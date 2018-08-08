const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Image = orm.define('image', {
    url: {
        type: Sequelize.STRING
    }
});

module.exports = Image;
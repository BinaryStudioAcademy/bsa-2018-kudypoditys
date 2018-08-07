const
    fs = require('fs'),
    path = require('path'),
    basename = path.basename(__filename),
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

const models = {
    Sequelize,
    orm
};

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .map(file => file.split('\\').pop().replace(/\..+$/, ''))
    .forEach(modelName => {
        models[modelName] = require(`${apiRoot}/models/${modelName}`);
    });

module.exports = orm.sync({ force: true }).then(() => models);
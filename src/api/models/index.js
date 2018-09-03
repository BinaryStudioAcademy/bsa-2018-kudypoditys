const path = require("path"),
    apiRoot = path.resolve(path.join(__dirname, "../.")),
    fs = require("fs"),
    basename = path.basename(__filename),
    Sequelize = require("sequelize"),
    orm = require(`../orm`),
    associations = require(`../associations`),
    seed = require("../seeds");

const models = {
    Sequelize,
    orm
};

fs.readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
        );
    })
    .map(file =>
        file
            .split("\\")
            .pop()
            .replace(/\..+$/, "")
    )
    .forEach(modelName => {
        models[modelName] = require(`${apiRoot}/models/${modelName}`);
    });

associations(models); // make associations

module.exports = orm

    .sync({force: false})
    .then(() => {
        seed(models);
    })
    .then(() => models);

const path = require("path"),
    apiRoot = path.resolve(path.join(__dirname, "../.")),
    fs = require("fs"),
    basename = path.basename(__filename),
    Sequelize = require("sequelize"),
    orm = require(`../orm`);

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
        models[modelName] = require(`${apiRoot}\\models\\${modelName}`);
    });

//associations(models); // make associations
Object.keys(models).map((modelName) => {
    models[modelName].associate && models[modelName].associate(models);
    return models[modelName];
});

module.exports = orm
    .sync()
    .then(() => models);

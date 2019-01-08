const path = require('path');
module.exports = {
    config: path.join(__dirname, "config.js"),
    "migrations-path": path.join(__dirname, "../src/api/migrations"),
    "seeders-path": path.join(__dirname, "../src/api/seeds"),
    "models-path": path.join(__dirname, "../src/api/models"),
};

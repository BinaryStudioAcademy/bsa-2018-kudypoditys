const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);
//Property = require('./Property');

let verificationStatus = orm.define('verificationStatus', {
    status: {
        type: Sequelize.STRING
    }
});

// verificationStatus.hasMany(Property);

module.exports = verificationStatus;
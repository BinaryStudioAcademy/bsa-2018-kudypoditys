const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);
//Property = require('./Property');

let VerificationStatus = orm.define('verificationStatus', {
    status: {
        type: Sequelize.STRING
    }
});

// verificationStatus.hasMany(Property);

module.exports = VerificationStatus;
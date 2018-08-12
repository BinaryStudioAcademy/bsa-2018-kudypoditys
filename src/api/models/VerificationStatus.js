const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let VerificationStatus = orm.define('verificationStatus', {
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = VerificationStatus;
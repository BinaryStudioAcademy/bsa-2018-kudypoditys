const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let VerificationStatus = orm.define('verificationStatus', {
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = VerificationStatus;
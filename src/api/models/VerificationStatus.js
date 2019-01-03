const Sequelize = require('sequelize'),
    orm = require('../orm');

const VerificationStatus = orm.define('verificationStatus', {
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

VerificationStatus.associate = function (models) {
    VerificationStatus.hasMany(models.Property);
};

module.exports = VerificationStatus;
const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`)

 let VerificationStatus = orm.define('verificationStatus', {
    status: {
        type: Sequelize.STRING
    }
});


module.exports = VerificationStatus;
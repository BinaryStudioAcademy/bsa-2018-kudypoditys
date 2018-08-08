const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let PaymentType = orm.define('paymentType', {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = PaymentType;
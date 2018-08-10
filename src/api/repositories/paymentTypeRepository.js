const Repository = require('./generalRepository');
const paymentTypeModel = require('../models/PaymentType');

class PaymentTypeRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new PaymentTypeRepository(paymentTypeModel);
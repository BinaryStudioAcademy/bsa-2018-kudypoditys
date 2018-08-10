const Service = require('./generalService');
const paymentTypeRepository = require("../repositories/paymentTypeRepository");

class PaymentTypeService extends Service {
    // todo add service logic
}

module.exports = new PaymentTypeService(paymentTypeRepository);
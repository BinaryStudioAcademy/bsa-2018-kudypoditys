const Service = require('./generalService');
const discountRepository = require("../repositories/discountRepository");

class DiscountService extends Service {
    // todo add service logic
}

module.exports = new DiscountService(discountRepository);
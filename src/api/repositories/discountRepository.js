const Repository = require('./generalRepository');
const discountModel = require('../models/Discount');

class DiscountRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new DiscountRepository(discountModel);
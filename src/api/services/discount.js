const Service = require('./generalService');
const discountRepository = require("../repositories/discountRepository");

class DiscountService extends Service {
    getAllDiscounts() {
        return discountRepository.findAll();
    }

    getDiscountById(id) {
        return discountRepository.findById(id);
    }

    addDiscount(discount) {
        return discountRepository.create(discount);
    }

    updateDiscount(id, discount) {
        return discountRepository.updateById({_id: id}, discount);
    }

    deleteDiscount(id) {
        return discountRepository.deleteById({_id: id});
    }
}


module.exports = new DiscountService(discountRepository);
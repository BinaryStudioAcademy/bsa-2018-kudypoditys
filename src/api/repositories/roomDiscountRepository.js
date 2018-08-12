const Repository = require('./generalRepository');
const roomDiscountModel = require('../models/RoomDiscount');

class RoomDiscountRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new RoomDiscountRepository(roomDiscountModel);
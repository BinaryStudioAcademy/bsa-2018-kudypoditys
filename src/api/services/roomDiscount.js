const Service = require('./generalService');
const roomDiscountRepository = require("../repositories/roomDiscountRepository");

class RoomDiscountService extends Service {
    // todo add service logic
}

module.exports = new RoomDiscountService(roomDiscountRepository);
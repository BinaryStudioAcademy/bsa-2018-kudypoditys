const Service = require('./generalService');
const roomDiscountRepository = require("../repositories/roomDiscountRepository");

class RoomDiscountService extends Service {
    getAllRoomDiscounts() {
        return roomDiscountRepository.findAll();
    }

    getRoomDiscountById(id) {
        return roomDiscountRepository.findById(id);
    }

    addRoomDiscount(roomDiscount) {
        return roomDiscountRepository.create(roomDiscount);
    }

    updateRoomDiscount(id, roomDiscount) {
        return roomDiscountRepository.updateById({_id: id}, roomDiscount);
    }

    deleteRoomDiscount(id) {
        return roomDiscountRepository.deleteById({_id: id});
    }
}

module.exports = new RoomDiscountService(roomDiscountRepository);
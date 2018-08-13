const Service = require('./generalService');
const bedInRoomRepository = require("../repositories/bedInRoomRepository");

class BedInRoomService extends Service {
    getAllBedInRooms() {
        return bedInRoomRepository.findAll();
    }

    getBedInRoomById(id) {
        return bedInRoomRepository.findById(id);
    }

    addBedInRoom(bedInRoom) {
        return bedInRoomRepository.create(bedInRoom);
    }

    updateBedInRoom(id, bedInRoom) {
        return bedInRoomRepository.updateById({_id: id}, bedInRoom);
    }

    deleteBedInRoom(id) {
        return bedInRoomRepository.deleteById({_id: id});
    }
}

module.exports = new BedInRoomService(bedInRoomRepository);
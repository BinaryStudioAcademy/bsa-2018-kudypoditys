const Service = require("./generalService");
const roomRepository = require("../repositories/roomRepository");

class RoomService extends Service {
    getAllRooms() {
        return roomRepository.findAll();
    }

    getRoomById(id) {
        return roomRepository.findById(id);
    }

    addRoom(room) {
        return roomRepository.create(room);
    }

    updateRoom(id, room) {
        return roomRepository.updateById({ _id: id }, room);
    }

    deleteRoom(id) {
        return roomRepository.deleteById({ _id: id });
    }

    getRoomAvailabilityInform(id) {
        return roomRepository.getRoomWithavailability(id);
    }
}

module.exports = new RoomService(roomRepository);

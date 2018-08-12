const Service = require('./generalService');
const roomRepository = require("../repositories/roomRepository");

class RoomService extends Service {
    // todo add service logic
}

module.exports = new RoomService(roomRepository);
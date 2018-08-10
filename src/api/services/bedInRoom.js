const Service = require('./generalService');
const bedInRoomRepository = require("../repositories/bedInRoomRepository");

class BedInRoomService extends Service {
    // todo add service logic
}

module.exports = new BedInRoomService(bedInRoomRepository);
const Service = require('./generalService');
const roomTypeRepository = require("../repositories/roomTypeRepository");

class RoomTypeService extends Service {
}

module.exports = new RoomTypeService(roomTypeRepository);
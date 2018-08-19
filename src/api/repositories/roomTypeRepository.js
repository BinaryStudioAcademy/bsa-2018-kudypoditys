const Repository = require('./generalRepository');
const roomTypeModel = require('../models/RoomType');

class RoomTypeRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new RoomTypeRepository(roomTypeModel);
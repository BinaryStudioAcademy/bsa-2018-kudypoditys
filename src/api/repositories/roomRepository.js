const Repository = require('./generalRepository');
const roomModel = require('../models/Room');

class RoomRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new RoomRepository(roomModel);
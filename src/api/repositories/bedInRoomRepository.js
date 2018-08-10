const Repository = require('./generalRepository');
const bedInRoomModel = require('../models/BedInRoom');

class BedInRoomRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new BedInRoomRepository(bedInRoomModel);
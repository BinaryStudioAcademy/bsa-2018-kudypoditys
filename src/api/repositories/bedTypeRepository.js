const Repository = require('./generalRepository');
const bedTypeModel = require('../models/BedType');

class BedTypeRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new BedTypeRepository(bedTypeModel);
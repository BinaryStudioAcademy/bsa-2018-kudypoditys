const Repository = require('./generalRepository');
const facilityListModel = require('../models/FacilityList');

class FacilityListRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new FacilityListRepository(facilityListModel);
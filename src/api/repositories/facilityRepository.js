const Repository = require('./generalRepository');
const facilityModel = require('../models/Facility');

class FacilityRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new FacilityRepository(facilityModel);
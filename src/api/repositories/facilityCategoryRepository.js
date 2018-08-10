const Repository = require('./generalRepository');
const facilityCategoryModel = require('../models/FacilityCategory');

class FacilityCategoryRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new FacilityCategoryRepository(facilityCategoryModel);
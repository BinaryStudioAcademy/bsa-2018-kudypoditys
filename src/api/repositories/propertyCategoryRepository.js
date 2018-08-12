const Repository = require('./generalRepository');
const propertyCategoryModel = require('../models/PropertyCategory');

class PropertyCategoryRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new PropertyCategoryRepository(propertyCategoryModel);
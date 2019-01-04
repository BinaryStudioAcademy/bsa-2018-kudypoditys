const Repository = require('./generalRepository');
const propertyLanguage = require('../models/PropertyLanguage');

class PropertyLanguageRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new PropertyLanguageRepository(propertyLanguage);
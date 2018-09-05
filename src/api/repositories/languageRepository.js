const Repository = require('./generalRepository');
const languageModel = require('../models/Language');

class LanguageRepository extends Repository {
  //todo additional methods for repository
}

module.exports = new LanguageRepository(languageModel);
const Service = require('./generalService');
const languageRepository = require("../repositories/languageRepository");

class LanguageService extends Service {
  // todo add service logic
}

module.exports = new LanguageService(languageRepository);
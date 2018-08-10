const Service = require('./generalService');
const scoreByCategoryRepository = require("../repositories/scoreByCategoryRepository");

class ScoreByCategoryService extends Service {
    // todo add service logic
}

module.exports = new ScoreByCategoryService(scoreByCategoryRepository);
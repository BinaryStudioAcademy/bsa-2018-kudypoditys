const Repository = require('./generalRepository');
const scoreByCategoryModel = require('../models/ScoreByCategory');

class ScoreByCategoryRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new ScoreByCategoryRepository(scoreByCategoryModel);
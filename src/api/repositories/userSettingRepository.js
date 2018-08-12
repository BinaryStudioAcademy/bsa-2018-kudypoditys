const Repository = require('./generalRepository');
const userSettingModel = require('../models/UserSetting');

class UserSettingRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new UserSettingRepository(userSettingModel);
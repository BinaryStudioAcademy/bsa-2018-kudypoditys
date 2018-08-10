const Service = require('./generalService');
const userSettingRepository = require("../repositories/userSettingRepository");

class UserSettingService extends Service {
    // todo add service logic
}

module.exports = new UserSettingService(userSettingRepository);
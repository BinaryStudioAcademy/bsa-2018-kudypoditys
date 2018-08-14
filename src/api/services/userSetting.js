const Service = require('./generalService');
const userSettingRepository = require("../repositories/userSettingRepository");

class UserSettingService extends Service {
    getAllUserSettings() {
        return userSettingRepository.findAll();
    }

    getUserSettingById(id) {
        return userSettingRepository.findById(id);
    }

    addUserSetting(userSetting) {
        return userSettingRepository.create(userSetting);
    }

    updateUserSetting(id, userSetting) {
        return userSettingRepository.updateById({_id: id}, userSetting);
    }

    deleteUserSetting(id) {
        return userSettingRepository.deleteById({_id: id});
    }
}


module.exports = new UserSettingService(userSettingRepository);
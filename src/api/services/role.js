const Service = require('./generalService');
const roleRepository = require("../repositories/roleRepository");

class RoleService extends Service {
    // todo add service logic
}

module.exports = new RoleService(roleRepository);
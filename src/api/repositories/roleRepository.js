const Repository = require('./generalRepository');
const roleModel = require('../models/Role');

class RoleRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new RoleRepository(roleModel);
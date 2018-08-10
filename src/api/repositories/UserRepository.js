const Repository = require('./generalRepository');
const userModel = require('.././models/User');

class UserRepository extends Repository  {
    constructor() {
        super();
        this.model = userModel;
    }
}

module.exports = new UserRepository();
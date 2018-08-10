const Repository = require('./generalRepository');
const verificationStatusModel = require('../models/VerificationStatus');

class VerificationStatusRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new VerificationStatusRepository(verificationStatusModel);
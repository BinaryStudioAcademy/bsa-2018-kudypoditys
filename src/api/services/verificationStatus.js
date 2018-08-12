const Service = require('./generalService');
const verificationStatusRepository = require("../repositories/verificationStatusRepository");

class VerificationStatusService extends Service {
    // todo add service logic
}

module.exports = new VerificationStatusService(verificationStatusRepository);
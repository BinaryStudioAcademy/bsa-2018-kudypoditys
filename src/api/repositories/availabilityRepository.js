const Repository = require("./generalRepository");
const AvailabilityModel = require("../models/Availability");

class AvailabilityRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new AvailabilityRepository(AvailabilityModel);

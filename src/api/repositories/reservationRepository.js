const Repository = require('./generalRepository');
const reservationModel = require('../models/Reservation');

class ReservationRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new ReservationRepository(reservationModel);
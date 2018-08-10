const Service = require('./generalService');
const reservationRepository = require("../repositories/reservationRepository");

class ReservationService extends Service {
    // todo add service logic
}

module.exports = new ReservationService(reservationRepository);
const Service = require('./generalService');
const reservationRepository = require("../repositories/reservationRepository");

class ReservationService extends Service {
    getAllReservations() {
        return reservationRepository.findAll();
    }

    getReservationById(id) {
        return reservationRepository.findById(id);
    }

    addReservation(reservation) {
        return reservationRepository.create(reservation);
    }

    updateReservation(id, reservation) {
        return reservationRepository.updateById({_id: id}, reservation);
    }

    deleteReservation(id) {
        return reservationRepository.deleteById({_id: id});
    }
}

module.exports = new ReservationService(reservationRepository);
const Service = require("./generalService");
const reservationRepository = require("../repositories/reservationRepository");
const roomService = require(".././services/room");

class ReservationService extends Service {
    getAllReservations() {
        return reservationRepository.findAll();
    }

    getReservationById(id) {
        return reservationRepository.findById(id);
    }

    async addReservation(reservation) {
        try {
            const bookings = await this.findByOptions({
                roomId: reservation.roomId
            });
            const available = await this.checkAvailability(
                reservation,
                bookings
            );
            if (available) return this.repository.create(reservation);
            throw new Error("No such rooms available for these dates");
        } catch (err) {
            return Promise.reject(err);
        }
    }

    updateReservation(id, reservation) {
        return reservationRepository.updateById({ _id: id }, reservation);
    }

    deleteReservation(id) {
        return reservationRepository.deleteById({ _id: id });
    }

    async checkAvailability(reservation, bookings) {
        if (!bookings || !bookings.length) return Promise.resolve(true);
        try {
            const room = await roomService.findById(reservation.roomId);
            let roomAmount = room.amount;
            if (!room) throw new Error("Wrong room id: room type not found");
            for (let i = 0; i < bookings.length; i++) {
                if (
                    bookings[i].roomId === room.id &&
                    this.datesIntersect(
                        bookings[i].dateIn,
                        bookings[i].dateOut,
                        reservation.dateIn,
                        reservation.dateOut
                    )
                )
                    roomAmount--;
            }
            if (roomAmount <= 0) return Promise.resolve(false);
            return Promise.resolve(true);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    datesIntersect(dateIn1, dateOut1, dateIn2, dateOut2) {
        if (dateIn2 >= dateIn1 && dateIn2 <= dateOut1) {
            return true;
        }
        if (dateOut2 <= dateOut1 && dateOut2 >= dateIn1) {
            return true;
        }
        return false;
    }
}

module.exports = new ReservationService(reservationRepository);

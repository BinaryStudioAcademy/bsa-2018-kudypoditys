const Service = require("./generalService");
const reservationRepository = require("../repositories/reservationRepository");
const roomService = require("./room");

class ReservationService extends Service {
    async findAll() {
        try {
            const reservations = await this.repository.findAll();
            return Promise.resolve(reservations);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async findById(id) {
        try {
            const reservation = await this.repository.findById(id);
            return Promise.resolve(reservation);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async create(reservation) {
        try {
            const bookings = await this.findByOptions({
                roomId: reservation.roomId
            });
            const available = await this.checkAvailability(
                reservation,
                bookings
            );
            if (available) return this.repository.create(reservation);
            return Promise.reject(
                new Error("No such rooms available for these dates")
            );
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async updateById(id, values) {
        try {
            await super.updateById(id, values);
            return this.findById(id);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async deleteById(id) {
        try {
            const deletedReservation = await this.findById(id).then(
                reservation => reservation
            );
            super.deleteById(id);
            return Promise.resolve(deletedReservation);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async checkAvailability(reservation, bookings) {
        if (!bookings || !bookings.length) return Promise.resolve(true);
        try {
            const room = await roomService.findById(reservation.roomId);
            if (!room) throw new Error("Wrong room id: room type not found");
            let roomAmount = room.amount;
            for (let i = 0; i < bookings.length; i++) {
                if (
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

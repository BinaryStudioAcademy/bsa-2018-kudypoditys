const Service = require("./generalService");
const reservationRepository = require("../repositories/reservationRepository");
const Sequelize = require('sequelize');
const roomService = require("./room");
const userRepository = require("../repositories/userRepository");
const userService = require("./user");
const availabilityService = require("./availability");
const moment = require("moment");
const shortid = require("shortid");
const mailService = require("./mail");
const propertyService = require("./property");

class ReservationService extends Service {
    async findAll() {
        try {
            const reservations = await this.repository.findAll();
            return Promise.resolve(reservations);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async findByOptions(options) {
        try {
            const reservations = await this.repository.findByOptions(options);
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

    async findByRoomAndDates(room, checkIn, checkOut) {
        try {
            const Op = Sequelize.Op;
            const bookings = await this.findByOptions({
                roomId: room.id,
                [Op.or]: [
                    {
                        dateIn: {
                            [Op.gte]: new Date(checkIn), // >= checkIn
                            [Op.lt]: new Date(checkOut), // < checkOut
                        },
                    },{
                        dateOut: {
                            [Op.gt]: new Date(checkIn), // > checkIn
                            [Op.lte]: new Date(checkOut), // <= checkOut
                        },
                    }
                ],
            });
            return Promise.resolve(bookings);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async sendMailBookingSuccess(userId, orderCode) {
        const receiver = await userRepository.findById(userId);
        const subject = "KudyPoditys booking success";
        const body = `You have successfully booked, your order code <b> ${orderCode} </b>`;
        return mailService.sendMail(receiver, subject, body);
    }

    async sendMailBookingCancelled(receiver, reason, reservation) {
        const subject = "KudyPoditys booking cancellation";
        const body = `We are sorry, but your property owner has cancelled your booking (№${
                reservation.orderCode
            }) at ${
                reservation.room.property.name
            } for the following reason: <br><br> ${reason} </b>`

        return mailService.sendMail(receiver, subject, body);
    }

    async ownerCancel(id, reason) {
        try {
            const reservation = await this.findById(id);
            const user = await userService.findById(reservation.user.id);
            await this.deleteById(id);
            await this.sendMailBookingCancelled(
                user,
                reason,
                reservation
            );
            return Promise.resolve(true);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async create(reservation) {
        reservation.orderCode = shortid.generate().toUpperCase();
        try {
            const room = await roomService.findById(reservation.roomId);
            const available = await this.available(
                room,
                reservation.dateIn,
                reservation.dateOut
            );

            if (available) {
                this.sendMailBookingSuccess(
                    reservation.userId,
                    reservation.orderCode
                );

                await propertyService.updateLastBooked(reservation.propertyId,{ lastBooked : moment().format()});

                return this.repository.create(reservation);
            }
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

    async available(room, checkIn, checkOut) {
        try {
            const bookings = await this.findByOptions({
                roomId: room.id
            });
            const availabilities = await availabilityService.findByOptions({
                roomId: room.id
            });

            if (availabilities.length) {
                for (
                    let i = moment(checkIn);
                    i <= moment(checkOut);
                    i = moment(i).add(1, "day")
                ) {
                    let availability = await availabilities.find(item => {
                        return item.date === moment(i).date();
                    });
                    let roomAmount = availability.amount;

                    for (let i = 0; i < bookings.length; i++) {
                        if (
                            moment(bookings[i].dateIn).date() <
                                availability.date &&
                            moment(bookings[i].dateOut).date() >
                                availability.date
                        )
                            roomAmount--;
                    }
                    if (roomAmount <= 0) return Promise.resolve(false);
                }
                return Promise.resolve(true);
            } else {
                let roomAmount = room.amount;
                for (let i = 0; i < bookings.length; i++) {
                    if (
                        this.datesIntersect(
                            checkIn,
                            checkOut,
                            bookings[i].dateIn,
                            bookings[i].dateOut
                        )
                    )
                        roomAmount--;
                }
                return Promise.resolve(roomAmount);
                // if (roomAmount <= 0) return Promise.resolve(false);
                // return Promise.resolve(true);
            }
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

module.exports = new ReservationService(reservationRepository);

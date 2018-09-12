const Service = require("./generalService");
const reservationRepository = require("../repositories/reservationRepository");
const roomService = require("./room");
const userRepository = require("../repositories/userRepository");
const userService = require("./user");
const shortid = require("shortid");
const nodemailer = require("nodemailer");

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

    async sendMailBookingSuccess(userId, orderCode) {
        const EMAIL_USER = process.env.EMAIL_USER;
        const EMAIL_PASS = process.env.EMAIL_PASS;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });

        const user = await userRepository.findById(userId);
        const mailOptions = {
            from: EMAIL_USER,
            to: user.email,
            subject: "KudyPoditys booking success",
            html: `You have successfully booked, your order code <b> ${orderCode} </b>`
        };
        return transporter.sendMail(mailOptions);
    }

    async sendMailBookingCancelled(userEmail, reason, reservation) {
        const EMAIL_USER = process.env.EMAIL_USER;
        const EMAIL_PASS = process.env.EMAIL_PASS;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });
        const mailOptions = {
            from: EMAIL_USER,
            to: userEmail,
            subject: "KudyPoditys booking cancellation",
            html: `We are sorry, but your property owner has cancelled your booking (№${
                reservation.orderCode
            }) at ${
                reservation.room.property.name
            } for the following reason: <br><br> ${reason} </b>`
        };
        return transporter.sendMail(mailOptions);
    }

    async ownerCancel(id, reason) {
        try {
            const reservation = await this.findById(id);
            const user = await userService.findById(reservation.user.id);
            await this.deleteById(id);
            await this.sendMailBookingCancelled(
                user.email,
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
            const bookings = await this.findByOptions({
                roomId: reservation.roomId
            });
            const available = await this.checkAvailability(
                reservation,
                bookings
            );
            this.sendMailBookingSuccess(
                reservation.userId,
                reservation.orderCode
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

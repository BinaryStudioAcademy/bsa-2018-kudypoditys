const Service = require("./generalService");
const propertyRepository = require("../repositories/propertyRepository");
const roomService = require("./room");
const reservationService = require("./reservation");
const availabilityService = require("./availability");
const moment = require("moment");
const dateHelpers = require("../helpers/date-helpers")

class PropertyService extends Service {
    async findById(id) {
        try {
            let property = await this.repository.findById(id);
            let notes = {
                recentlyBooked: 0
            };
            notes.recentlyBooked = await this.wasBookedLastDay(property.id);
            property.notes = notes;
            const response = {
                property: property,
                notes: notes
            };
            return Promise.resolve(response);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async checkAvailability(value) {
        try {
            let result = [];
            const rooms = await roomService.findByOptions({
                propertyId: value.propertyId
            });

            // const roomsIds = rooms.map(room => room.id);
            // const availabilities = await availabilityService.findByOptions({
            //     roomId: roomsIds
            // });

            for (let i = 0; i < rooms.length; i++) {
                rooms[i].available = await this.availableRoomsCount(
                    rooms[i],
                    value.checkIn,
                    value.checkOut
                );

                //rooms[i].availabilities = availabilities.filter(av => av.roomId === rooms[i].id);

                const lastReservation = await this.getLastReservation(rooms[i], value.checkIn, value.checkOut);
                if (lastReservation) {
                    const daysTotal = dateHelpers.dateDiff('d',lastReservation.dateIn, lastReservation.dateOut);
                    const bookedDaysAgo = dateHelpers.dateDiff('d',lastReservation.createdAt, dateHelpers.getEndOfTodayDate());
                    rooms[i].lastReservation = {
                        // dateBooked: lastReservation.createdAt,
                        bookedDaysAgo: bookedDaysAgo,
                        pricePerNight: lastReservation.priceTotal / daysTotal,
                        // dateIn: lastReservation.dateIn,
                        // dateOut: lastReservation.dateOut,
                        // daysTotal: daysTotal,
                        // priceTotal: lastReservation.priceTotal,
                    };
                };
                result.push(rooms[i]);
            }
            return Promise.resolve(result);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async wasBookedLastDay(propertyId) {
        try {
            const rooms = await roomService.findByOptions({
                propertyId: propertyId
            });
            let booked = 0;
            for (let i = 0; i < rooms.length; i++) {
                const reservations = await reservationService.findByOptions({
                    roomId: rooms[i].id
                });
                for (let i = 0; i < reservations.length; i++) {
                    if (
                        moment(reservations[i].createdAt).add(1, "days") >
                        moment()
                    )
                        booked++;
                }
            }
            return Promise.resolve(booked);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async getLastReservation(room, checkIn, checkOut){
        try {
            const bookings = await reservationService.findByRoomAndDates(room, checkIn, checkOut);
            bookings.sort( (a, b) => {
                return b.id - a.id;
            });
            const lastBooking = bookings[0];
            return Promise.resolve(lastBooking);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async findBookingsBetweenDates(bookings, date1, date2){
        return bookings.filter(booking => {
            return reservationService.datesIntersect(
                booking.dateIn,
                booking.dateOut,
                date1,
                date2
            )
        });
    }

    async availableRoomsCount(room, checkIn, checkOut) {
        try {
            const bookings = await reservationService.findByRoomAndDates(room, checkIn, checkOut);
            let roomAmountByDay = [];
            const dateStart = moment(checkIn);
            const dateEnd = moment(checkOut);
            let date1 = dateStart;
            let date2;
            let roomsAmount;
            let bookingsOnDay;
            while(date1 <= dateEnd) {
                date2 = moment(date1).add(1, "day");
                bookingsOnDay = await this.findBookingsBetweenDates(bookings, date1, date2);
                roomsAmount = room.amount - bookingsOnDay.length;
                roomAmountByDay.push(roomsAmount);
                date1 = date2;
            }
            return Promise.resolve(Math.min(...roomAmountByDay));
        } catch (err) {
            return Promise.reject(err);
        }
    }


    getAllProperties() {
        return propertyRepository.findAll();
    }

    getPropertyById(id) {
        return propertyRepository.findById(id);
    }

    addProperty(property) {
        return propertyRepository.createDetails(property);
    }

    updateProperty(id, property) {
        return propertyRepository.updateById(id, property);
    }

    deleteProperty(id) {
        return propertyRepository.deleteById({ _id: id });
    }

    getDetailsById(id) {
        return propertyRepository
            .getDetailsById(id)
            .then(_ => {
                // console.log("service then ", _);
                return _;
            })
            .catch(_ => {
                // console.log("service catch ", _);
            });
    }
    getFilteredProperties(filter) {
        return propertyRepository.getFilteredProperties(filter);
    }
    getPropertiesByCity(city) {
        return propertyRepository.getPropertiesByCity(city);
    }
    async getUserPropertiesInfo(id) {
        const data = await propertyRepository.getUserPropertiesInfo(id);
        const response = data.map(property => {
            property.rooms = property.rooms.map(room => {
                room.availabilities = room.availabilities.sort(
                    (current, next) => {
                        return new Date(next.date) - new Date(current.date);
                    }
                );
                return room;
            });
            return property;
        });
        return response;
    }
}

module.exports = new PropertyService(propertyRepository);

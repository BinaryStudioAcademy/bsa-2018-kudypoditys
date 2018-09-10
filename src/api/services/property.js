const Service = require("./generalService");
const propertyRepository = require("../repositories/propertyRepository");
const roomService = require("./room");
const reservationService = require("./reservation");
const moment = require("moment");

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
            for (let i = 0; i < rooms.length; i++) {
                if (
                    await this.available(
                        rooms[i],
                        value.checkIn,
                        value.checkOut
                    )
                )
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

    async available(room, checkIn, checkOut) {
        try {
            const bookings = await reservationService.findByOptions({
                roomId: room.id
            });
            let roomAmount = room.amount;
            for (let i = 0; i < bookings.length; i++) {
                if (
                    reservationService.datesIntersect(
                        checkIn,
                        checkOut,
                        bookings[i].dateIn,
                        bookings[i].dateOut
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
                console.log("service then ", _);
                return _;
            })
            .catch(_ => {
                console.log("service catch ", _);
            });
    }
    getFilteredProperties(filter) {
        return propertyRepository.getFilteredProperties(filter);
    }
    getPropertiesByCity(city) {
        return propertyRepository.getPropertiesByCity(city);
    }
    getUserPropertiesInfo(id) {
        return propertyRepository.getUserPropertiesInfo(id);
    }
}

module.exports = new PropertyService(propertyRepository);

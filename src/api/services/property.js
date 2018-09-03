const Service = require("./generalService");
const propertyRepository = require("../repositories/propertyRepository");
const roomService = require("./room");
const reservationService = require("./reservation");

class PropertyService extends Service {
    async findById(id) {
        try {
            const property = await this.repository.findById(id);
            return Promise.resolve(property);
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

    getUserPropertiesInfo(id) {
        return propertyRepository.getUserPropertiesInfo(id);
    }
}

module.exports = new PropertyService(propertyRepository);

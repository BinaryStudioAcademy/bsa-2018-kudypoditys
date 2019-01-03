const Service = require("./generalService");
const propertyRepository = require("../repositories/propertyRepository");
const facilityRepository = require("../repositories/facilityRepository");
const mealsInRoomRepository = require("../repositories/mealInRoomRepository");
const propertyPaymentTypeRepository = require("../repositories/propertyPaymentTypeRepository");
const availabilityRepository = require("../repositories/availabilityRepository");
const roomRepository = require("../repositories/roomRepository");
const propertyLanguageRepository = require("../repositories/propertyLanguageRepository");

class PropertyService extends Service {
    async findById(id) {
        try {
            let property = await this.repository.findById(id);
            let notes = {
                recentlyBooked: 0
            };
            //Migrate in another file/logic
            //notes.recentlyBooked = await this.wasBookedLastDay(property.id);
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

    getAllProperties() {
        return propertyRepository.findAll();
    }

    updateLastBooked(id, lastBooked){
        return propertyRepository.updateLastBooked(id, lastBooked);
    }

    getPropertyById(id) {
        return propertyRepository.findById(id);
    }

    addProperty(property) {
        return propertyRepository
                .createDetails(property)
                .then(({ dataValues: newProperty }) => {
                    let facilityList = property.facilities.map(f => ({
                        propertyId: newProperty.id,
                        facilityId: f.id
                    }));
                    return facilityRepository.insertMany(facilityList)
                        .then(_ => newProperty);
                    })
                .then(newProperty => {
                    let mealsInRoom = []
                    property.rooms.forEach((room , index) => {
                        mealsInRoom = mealsInRoom
                        .concat(room.mealsInRoom
                            .map(x => Object.assign(
                                {roomId : newProperty.rooms[index].id,
                                mealId : x.name.id,
                                mealTypeId : x.type.id,
                                price : x.price})))
                    })
                    return mealsInRoomRepository.insertMany(mealsInRoom)
                        .then(_ => newProperty);}
                )
                .then(newProperty => {
                    let languages = property.languages.map(l => ({
                        propertyId: newProperty.id,
                        languageId: l.id
                    }));
                    return propertyLanguageRepository.insertMany(languages)
                        .then(_ => newProperty);
                })
                .then(newProperty => {
                    let paymentTypes = property.paymentTypes.map(p => ({
                        propertyId: newProperty.id,
                        paymentTypeId: p.id
                    }));

                    return propertyPaymentTypeRepository.insertMany(paymentTypes).then(
                        _ => newProperty
                    );
                })
                .then(newProperty => {
                    roomRepository.findByOptions({
                        propertyId: newProperty.id
                    }).then(propertyRooms => {
                        propertyRooms.forEach(room => {
                            let availabilities = this.getDaysArrayByMonth(
                                room.id,
                                room.amount,
                                room.price
                            );
                            availabilities.map(async availability => {
                                await availabilityRepository.create(availability);
                            });
                        });
                    });
                    return newProperty;
                })
                .then(newProperty => propertyRepository.findById(newProperty.id));
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

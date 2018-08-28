const sequelize = require("sequelize");
const Repository = require("./generalRepository");
const propertyModel = require("../models/Property");
const Facility = require("../models/Facility");
const PaymentType = require("../models/PaymentType");
const Room = require("../models/Room");
const AccommodationRule = require("../models/AccommodationRule");
const BedInRoom = require("../models/BedInRoom");
const Reservation = require("../models/Reservation");
const Country = require("../models/Country");
// const PropertyCategory = require("../models/PropertyCategory");
const RoomType = require("../models/RoomType");
const User = require("../models/User");
const City = require("../models/City");
const Image = require("../models/Image");

const PropertyType = require("../models/PropertyType");

const Review = require("../models/Review");

const Favorite = require("../models/Favorite");

class PropertyRepository extends Repository {
    getDetailsById(id) {
        return this.model
            .findOne({
                where: {
                    id: id
                },
                include: [
                    City,
                    PropertyType,
                    AccommodationRule,
                    {
                        model: Review,
                        include: [User]
                    },
                    Facility,
                    Room,
                    PaymentType
                ]
            })
            .then(x => {
                return Favorite.count({
                    where: {
                        propertyId: x.id
                    }
                }).then(likes => {
                    x.dataValues.likes = likes;
                    return x;
                });
            });
    }

    createDetails(entity) {
        return this.model.create(entity, {
            include: [
                PropertyType,
                Room,
                Facility,
                AccommodationRule,
                PaymentType
            ]
        });
    }
    getFilteredProperties(filter) {
        return this.model
            .findAll({
                include: [
                    {
                        model: City,
                        where: { name: filter.city }
                    },
                    {
                        model: Image
                    }
                ]
            })
            .then(properties => {
                return properties;
            });
    }
    findAll() {
        return this.model
            .findAll({
                include: [
                    {
                        model: City
                    },
                    {
                        model: Image
                    }
                ]
            })
            .then(properties => {
                return properties;
            });
    }
}

module.exports = new PropertyRepository(propertyModel);

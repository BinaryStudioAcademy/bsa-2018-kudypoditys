const sequelize = require("sequelize");
const Repository = require("./generalRepository");
const propertyModel = require("../models/Property");
const Facility = require("../models/Facility");
const PaymentType = require("../models/PaymentType");

const Reservation = require("../models/Reservation");
// const PropertyCategory = require("../models/PropertyCategory");
const RoomType = require("../models/RoomType");
const Image = require("../models/Image");
const Favorite = require("../models/Favorite");

const AccommodationRule = require("../models/AccommodationRule");
const PropertyType = require("../models/PropertyType");
const Country = require("../models/Country");
const City = require("../models/City");
const Review = require("../models/Review");
const User = require("../models/User");
const Room = require("../models/Room");
const FacilityList = require("../models/FacilityList");
const BedInRoom = require("../models/BedInRoom");
const BedType = require("../models/BedType");

const includeOptions = [
    {
        model: PropertyType,
        attributes: ["id", "name", "description"]
    },
    {
        model: City,
        attributes: ["id", "name"],
        include: [{ model: Country, attributes: ["id", "name"] }]
    },
    {
        model: AccommodationRule,
        attributes: [
            "id",
            "allowPets",
            "cancelReservation",
            "minimumStay",
            "arrivalTimeStart",
            "arrivalTimeEnd",
            "departureTimeStart",
            "departureTimeEnd"
        ]
    },
    {
        model: Image,
        attributes: ["id", "url", "propertyId", "roomId"]
    },
    {
        model: Review,
        attributes: ["id", "content"],
        inlcude: [
            {
                model: User,
                attributes: ["id", "fullName", "email", "avatar", "phoneNumber"]
            }
        ]
    },
    {
        model: Room,
        attributes: ["id", "price", "amount", "area", "description"],
        include: [
            { model: RoomType, attributes: ["id", "name"] },
            {
                model: BedInRoom,
                attributes: ["count"],
                include: [{ model: BedType, attributes: ["id", "name"] }]
            }
        ]
    },
    {
        model: FacilityList,
        include: [
            {
                model: Facility,
                attributes: ["id", "name"]
            }
        ]
    }
];

class PropertyRepository extends Repository {
    findById(id) {
        return this.model.findById(id, {
            attributes: [
                "id",
                "name",
                "address",
                "rating",
                "description",
                "coordinates",
                "contactPhone"
            ],
            include: includeOptions
        });
    }

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
                // City,
                PropertyType,
                Room,
                Facility,
                AccommodationRule,
                PaymentType,
                Image
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
                        model: Reservation,
                        where: {
                            dateIn: filter.dateIn,
                            dateOut: filter.dateOut
                        }
                    },
                    {
                        model: Room,
                        where: { amount: filter.roomsAmount }
                    },
                    {
                        model: BedInRoom,
                        where: { count: filter.bedsCount }
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

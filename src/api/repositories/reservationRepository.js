const Repository = require("./generalRepository");
const reservationModel = require("../models/Reservation");
const User = require("../models/User");
const Room = require("../models/Room");
const RoomType = require("../models/RoomType");
const PaymentType = require("../models/PaymentType");
const Property = require("../models/Property");
const Image = require(".././models/Image");
const Review = require("../models/Review");
const Currency = require('../models/Currency');

class ReservationRepository extends Repository {
    findAll() {
        return this.model.findAll({
            attributes: ["id", "dateIn", "dateOut", "guestsCount", "orderCode"],
            include: [
                {
                    model: User,
                    attributes: ["id", "fullName", "email", "avatar"]
                },
                {
                    model: Room,
                    attributes: ["id", "description", "price", "area"],
                    include: [
                        {
                            model: RoomType,
                            attributes: ["id", "name"]
                        },
                        {
                            model: Property,
                            include: [
                                {
                                    model: Image,
                                    attributes: [
                                        "id",
                                        "url",
                                        "propertyId",
                                        "roomId"
                                    ]
                                },
                                {
                                    model: Review,
                                    attributes: [
                                        "id",
                                        "pros",
                                        "cons",
                                        "Cleanliness",
                                        "Price",
                                        "Comfort",
                                        "Facilities",
                                        "avgReview",
                                        "createdAt",
                                        "anon"
                                    ]
                                },
                                {
                                    model: Currency
                                }
                            ],
                            attributes: [
                                "id",
                                "name",
                                "address",
                                "contactPhone",
                                "description"
                            ]
                        }
                    ]
                },
                {
                    model: PaymentType,
                    attributes: ["id", "name"]
                }
            ]
        });
    }

    findByOptions(options) {
        return this.model.findAll({
            where: options,
            attributes: [
                "id",
                "dateIn",
                "dateOut",
                "guestsCount",
                "orderCode",
                "createdAt"
            ],
            include: [
                {
                    model: User,
                    attributes: ["id", "fullName", "email", "avatar"]
                },
                {
                    model: Room,
                    attributes: ["id", "description", "price", "area"],
                    include: [
                        {
                            model: RoomType,
                            attributes: ["id", "name"]
                        },
                        {
                            model: Property,
                            include: [
                                {
                                    model: Image,
                                    attributes: [
                                        "id",
                                        "url",
                                        "propertyId",
                                        "roomId"
                                    ]
                                },
                                {
                                    model: Review,
                                    attributes: [
                                        "id",
                                        "pros",
                                        "cons",
                                        "Cleanliness",
                                        "Price",
                                        "Comfort",
                                        "Facilities",
                                        "avgReview",
                                        "createdAt",
                                        "anon"
                                    ]
                                },
                                {
                                    model: Currency
                                }
                            ],
                            attributes: [
                                "id",
                                "name",
                                "address",
                                "contactPhone",
                                "description",
                                "coordinates",
                                "rating"
                            ]
                        }
                    ]
                },
                {
                    model: PaymentType,
                    attributes: ["id", "name"]
                }
            ]
        });
    }

    findById(id) {
        return this.model.findById(id, {
            attributes: ["id", "dateIn", "dateOut", "guestsCount", "orderCode"],
            include: [
                {
                    model: User,
                    attributes: ["id", "fullName", "email", "avatar"]
                },
                {
                    model: Room,
                    attributes: ["id", "description", "price", "area"],
                    include: [
                        {
                            model: RoomType,
                            attributes: ["id", "name"]
                        },
                        {
                            model: Property,
                            include: {
                                model: Image,
                                attributes: [
                                    "id",
                                    "url",
                                    "propertyId",
                                    "roomId"
                                ]
                            },
                            attributes: [
                                "id",
                                "name",
                                "address",
                                "contactPhone",
                                "description"
                            ]
                        }
                    ]
                },
                {
                    model: PaymentType,
                    attributes: ["id", "name"]
                }
            ]
        });
    }
}

module.exports = new ReservationRepository(reservationModel);

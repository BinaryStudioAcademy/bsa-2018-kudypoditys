const Repository = require("./generalRepository");
const propertyModel = require("../models/Property");
const Facility = require("../models/Facility");
const PaymentType = require("../models/PaymentType");
const Sequelize = require("sequelize");
const Reservation = require("../models/Reservation");
const RoomType = require("../models/RoomType");
const Image = require("../models/Image");
const Availability = require("../models/Availability");
const Favorite = require("../models/Favorite");
const AccommodationRule = require("../models/AccommodationRule");
const PropertyType = require("../models/PropertyType");
const PropertyPaymentType = require("../models/PropertyPaymentType");
const Country = require("../models/Country");
const City = require("../models/City");
const Review = require("../models/Review");
const User = require("../models/User");
const Room = require("../models/Room");
const FacilityList = require("../models/FacilityList");
const BedInRoom = require("../models/BedInRoom");
const BedType = require("../models/BedType");
const PropertyLanguage = require("../models/PropertyLanguage");
const BasicFacility = require("../models/BasicFacility");
const FacilityCategory = require("../models/FacilityCategory");

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
        ],
        include: [
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
        attributes: ["belongsToProperty"],
        include: [
            {
                model: Facility,
                attributes: ["id", "name"],
                include: { model: FacilityCategory, attributes: ["name"] }
            }
        ]
    },
    {
        model: PaymentType,
        attributes: ["name", "id"]
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

    getPropertiesByCity(city) {
        console.log(city);
        return this.model
            .findAll({
                where: {
                    cityId: city
                },
                include: [
                    {
                        model: City
                    },
                    {
                        model: Image
                    },
                    {
                        model: Review
                    },

                    {
                        model: Room,
                        include: [
                            RoomType,
                            {
                                model: BedInRoom
                                // where: {
                                //     count: { $gte: filter.bedsCount }
                                // }
                            },
                            {
                                model: Reservation
                                //    where: {
                                // dateIn: { $gte: moment().subtract(10, 'days').toDate()},
                                //dateOut: { $lte: moment().add(5, 'days').toDate()}
                                //   }
                            }
                        ]
                    }
                ]
            })
            .then(properties => {
                return properties;
            });
    }

    createDetails(entity) {
        return this.model
            .create(entity, {
                include: [
                    AccommodationRule,
                    BasicFacility,
                    Image,
                    {
                        model: Room,
                        include: [BedInRoom]
                    }
                ]
            })
            .then(({ dataValues: newProperty }) => {
                let facilityList = entity.facilities.map(f => ({
                    propertyId: newProperty.id,
                    facilityId: f.id
                }));
                return FacilityList.bulkCreate(facilityList).then(
                    _ => newProperty
                );
            })
            .then(newProperty => {
                let languages = entity.languages.map(l => ({
                    propertyId: newProperty.id,
                    languageId: l.id
                }));

                return PropertyLanguage.bulkCreate(languages).then(
                    _ => newProperty
                );
            })
            .then(newProperty => {
                let paymentTypes = entity.paymentTypes.map(p => ({
                    propertyId: newProperty.id,
                    paymentTypeId: p.id
                }));

                return PropertyPaymentType.bulkCreate(paymentTypes).then(
                    _ => newProperty
                );
            })
            .then(newProperty => this.findById(newProperty.id));
    }
    getFacilityId(facilityStr) {
        let facilityId;
        switch (facilityStr) {
            case "Fitness_spa_locker_rooms":
                facilityId = 1; //id from seed
                break;
            // case 'Queen_bed':
            //     facilityId = 3;
            //     break;
            case "Dogs":
                facilityId = 5;
                break;
            default:
                facilityId = -1;
        }

        return facilityId;
    }
    getBedTypeId(bedTypeStr) {
        let bedTypeId;
        switch (bedTypeStr) {
            case "Queen_bed":
                bedTypeId = 3; //id from seed
                break;
            default:
                bedTypeId = -1;
        }
        return bedTypeId;
    }
    getFilteredProperties(filter) {
        console.log("filter " + JSON.stringify(filter));
        const SORT_VALUE = {
            PRICE: "price",
            DISTANCE: "distance_to_center",
            LOW_RANK: "rating_starting_from_low",
            HIGH_RANK: "rating_starting_from_high"
        };

        let sortingOption;
        switch (filter.sortBy) {
            case SORT_VALUE.PRICE:
                sortingOption = [[Room, "price", "ASC"]];
                break;
            case SORT_VALUE.DISTANCE:
                sortingOption = [["distanceToCentre", "ASC"]];
                break;
            case SORT_VALUE.LOW_RANK:
                sortingOption = [["rating", "ASC"]];
                break;
            case SORT_VALUE.HIGH_RANK:
                sortingOption = [["rating", "DESC"]];
                break;
            default:
                sortingOption = [["rating"]];
        }

        let facilityOption =
            filter.dogs !== "" || filter.fitness_spa_locker_rooms !== ""
                ? [
                      {
                          model: Facility,
                          required: true,
                          where: {
                              id: {
                                  $in: [
                                      this.getFacilityId(filter.dogs),
                                      this.getFacilityId(
                                          filter.fitness_spa_locker_rooms
                                      )
                                  ]
                              }
                          },
                          include: { model: FacilityCategory }
                      }
                  ]
                : [Facility];

        let bedsInRoomOption =
            filter.queen_bed || filter.full_bed //we don't send full bad type yet
                ? {
                      model: BedInRoom,
                      where: {
                          count: { $gte: filter.bedsCount },
                          bedTypeId: {
                              $in: [this.getBedTypeId(filter.queen_bed)]
                          }
                      }
                  }
                : {
                      model: BedInRoom,
                      where: {
                          count: { $gte: filter.bedsCount }
                      }
                  };

        let offsetData = filter.page ? 5 * (filter.page - 1) : 0;

        return this.model
            .findAll({
                limit: 5,
                offset: offsetData,
                where: {
                    id: { $in: filter.propertiesIds }
                },
                order: sortingOption,
                include: [
                    {
                        model: City
                    },
                    {
                        model: Image
                    },
                    {
                        model: Review
                    },
                    {
                        model: FacilityList,
                        include: facilityOption

                        //     [
                        //     {
                        //         model: Facility,
                        //         where: { id: { $in: [5] } },
                        //     }
                        // ]
                    },

                    {
                        model: Room,
                        where: {
                            amount: { $gte: filter.rooms }
                        },
                        include: [
                            RoomType,

                            bedsInRoomOption,
                            {
                                model: Reservation
                                // where: {
                                // from: {
                                //     $between: [filter.dateIn, filter.dateOut]
                                //    }
                                // $or:[{
                                //     dateOut: {
                                //         $lte: filter.dateIn,
                                //         $gte: filter.dateOut
                                //     },

                                //     dateIn: {
                                //         $lte: filter.dateIn,
                                //         $gte: filter.dateOut
                                //     }
                                // }],
                                // }
                            }
                        ]
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
                where: {},
                include: [
                    {
                        model: City
                    },
                    {
                        model: Image
                    },
                    {
                        model: Review
                    },
                    // {
                    //     model: FacilityList,
                    //     required: true,
                    //     include: [
                    //         {
                    //             model: Facility,
                    //             required: true,
                    //             where: { id: { $in: [5] } },
                    //             include: { model: FacilityCategory }
                    //         }
                    //     ]
                    // },

                    {
                        model: Room,
                        include: [
                            RoomType,
                            {
                                model: BedInRoom
                            },
                            {
                                model: Reservation
                                //    where: {
                                // dateIn: { $gte: moment().subtract(10, 'days').toDate()},
                                //dateOut: { $lte: moment().add(5, 'days').toDate()}
                                //   }
                            }
                        ]
                    }
                ]
            })
            .then(properties => {
                return properties;
            });
    }

    getUserPropertiesInfo(id) {
        return this.model.findAll({
            where: {
                userId: 1
            },
            include: [
                {
                    model: Room,
                    include: [
                        {
                            model: Reservation,
                            include: [
                                {
                                    model: User
                                }
                            ]
                        },
                        {
                            model: Availability
                        }
                    ]
                },
                {
                    model: Image,
                    attributes: ["id", "url", "propertyId", "roomId"]
                }
            ]
        });
    }
}

module.exports = new PropertyRepository(propertyModel);

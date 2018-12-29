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
const Language = require("../models/Language");
const AvailabilityRepository = require("./availabilityRepository");
const RoomRepository = require("./roomRepository");
const moment = require("moment");

const Currency = require('../models/Currency');

const includeOptions = [
    {
        model: Currency
    },
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
                attributes: ["id", "fullName", "email", "avatar", "phoneNumber", "nickname", "countryId"],
                include: [{ model: Country, attributes: ["id", "name", "flagUrl"] }]
            }
        ]
    },
    {
        model: Room,
        attributes: ["id", "price", "amount", "area", "description"],
        include: [
            { model: Availability, attributes:["id", "price", "date", "dateCal", "amount"]},
            { model: RoomType, attributes: ["id", "name"] },
            {
                model: BedInRoom,
                attributes: ["count"],
                include: [{ model: BedType, attributes: ["id", "name"] }]
            },
            {
                model: Reservation,
                attributes: ["id"]
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
        model: BasicFacility,
        attributes: ["hasInternet", "hasParking", "internetPrice", "isFree", "isOnTerritory", "isPrivate", "needToBook", "parkingPrice"]
    },
    {
        model: PaymentType,
        attributes: ["name", "id"]
    },
    {
        model: Language,
        attributes: ["id", "name"]
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
                "contactPhone",
                "contactPersonName",
                "lastBooked"
            ],
            include: includeOptions
        });
    }

    updateLastBooked(id,lastBooked){
        return this.model.findOne({
            where: {
                id: id,
            }
        }).then(async (property) => {
            await property.update(lastBooked);
        });    
    }

    updateById(id, data) {
        return this.model.findOne({
            where: {
                id: id,
                userId: data.userId
            }
        }).then(async (property) => {
            // update basic info
            await property.update(data);
            
            // update accommodationRule
            await AccommodationRule.update(data.accommodationRule, {
                where: {
                    id: property.dataValues.accommodationRuleId
                }
            });
            // update languages
            await PropertyLanguage.destroy({
                    where: {
                        propertyId: property.id
                    }
            });
            let languages = data.languages.map(language => ({
                propertyId: property.id,
                languageId: language.id
            }));
            await PropertyLanguage.bulkCreate(languages);

            // update paymentTypes
            await PropertyPaymentType.destroy({
                where: {
                    propertyId: property.id
                }
            });
            let paymentTypes = data.paymentTypes.map(paymentType => ({
                propertyId: property.id,
                paymentTypeId: paymentType.id
            }));
            await PropertyPaymentType.bulkCreate(paymentTypes);

            // delete rooms
            let roomIds = [];
            data.rooms.forEach(room => {
                if (room.id) {
                    roomIds.push(room.id);
                }
            });
            await Room.destroy({
                where: {
                    id: {[Sequelize.Op.notIn]: roomIds},
                    propertyId: id
                }
            });
            // update/create rooms
            data.rooms.forEach(async (roomData) => {
                if (roomData.id) {
                    await Room.update(roomData, {
                        where: {
                            id: roomData.id
                        }
                    });
                    await BedInRoom.destroy({
                        where: {
                            roomId: roomData.id
                        }
                    });
                    await BedInRoom.bulkCreate(roomData.bedInRooms.map(bed => {
                        return {
                            bedTypeId: bed.bedTypeId,
                            count: bed.count,
                            roomId: roomData.id
                        }
                    }));
                } else {
                    let room = await Room.create({
                        ...roomData,
                        propertyId: property.id
                    });
                    await BedInRoom.bulkCreate(roomData.bedInRooms.map(bed => {
                        return {
                            bedTypeId: bed.bedTypeId,
                            count: bed.count,
                            roomId: room.id
                        }
                    }));
                }
            });

            // update images
            await Image.destroy({
                where: {
                    propertyId: property.id
                }
            });
            let images = data.images.map(image => ({
                propertyId: property.id,
                url: image.url
            }));
            await Image.bulkCreate(images);

            // update basicFacility
            await BasicFacility.update(data.basicFacility, {
                where: {
                    propertyId: property.id
                }
            });

            // update facilities
            await FacilityList.destroy({
                where: {
                    propertyId: property.id
                }
            });
            let facilities = data.facilities.map(facility => ({
                propertyId: property.id,
                facilityId: facility.id
            }));
            await FacilityList.bulkCreate(facilities);
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
        return this.model
            .findAll({
                where: {
                    cityId: city
                },
                include: [

                    {
                        model: City,
                        include: [
                            {
                                model: Country
                            }
                        ]
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
                            },
                            {
                                model: Reservation
                            }
                        ]
                    }
                ]
            })
            .then(properties => {
                return properties;
            });
    }

    getDaysArrayByMonth(id, amount, price) {
        // let daysInMonth = moment().daysInMonth();
        const arrDays = [];
        let daysInMonth = 31;
        while (daysInMonth) {
            let current = {
                roomId: id,
                amount: amount,
                date: daysInMonth,
                price: price
            };
            arrDays.push(current);
            daysInMonth--;
        }
        return arrDays.reverse();
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
            .then(newProperty => {
                RoomRepository.findByOptions({
                    propertyId: newProperty.id
                }).then(propertyRooms => {
                    propertyRooms.map(room => {
                        let availabilities = this.getDaysArrayByMonth(
                            room.id,
                            room.amount,
                            room.price
                        );
                        availabilities.map(async availability => {
                            await AvailabilityRepository.create(availability);
                        });
                    });
                });

                return newProperty;
            })
            .then(newProperty => this.findById(newProperty.id));
    }
    getFacilityId(facilityStr) {
        let facilityId;
        switch (facilityStr) {
            case "Fitness_spa_locker_rooms":
                facilityId = 1; //id from seed
                break;
            case "Dogs":
                facilityId = 5;
                break;

            case "Full_body_massage":
                facilityId = 3;
                break;

            case "Daily_maid_service":
                facilityId = 8;
                break;
            case "Laundry":
                facilityId = 11;
                break;

            case "Walking tours":
                facilityId = 16;
                break;
            case "Live_music_performance":
                facilityId = 13;
                break;
            case "Live_sport_events":
                facilityId = 12;
                break;
            case "Themed_dinner_nights":
                facilityId = 14;
                break;

            case "Movie_nights":
                facilityId = 17;
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
                bedTypeId = 3;
                break;
            case "Full_bed":
                bedTypeId = 2;
                break;
            case "Twin_bed":
                bedTypeId = 1;
                break;
            case "King_bed":
                bedTypeId = 4;
                break;
            default:
                bedTypeId = -1;
        }
        return bedTypeId;
    }
    getPriceRange(priceRangeStr) {
        let priceRange;
        switch (priceRangeStr) {
            case "US0_US30":
                priceRange = [0, 30];
                break;
            case "US30_US60":
                priceRange = [30, 60];
                break;
            case "US60_US90":
                priceRange = [60, 90];
                break;
            case "US90":
                priceRange = [90, 10000000];
                break;
            default:
                priceRange = [0];
        }
        return priceRange;
    }
    getRatingRange(ratingRangeStr) {
        let ratingRange;
        switch (ratingRangeStr) {
            case "Wonderful":
                ratingRange = [9, 10];
                break;
            case "Very_Good":
                ratingRange = [8, 8.9];
                break;
            case "Good":
                ratingRange = [7, 7.9];
                break;
            case "Pleasant":
                ratingRange = [6, 6.9];
                break;
            case "Its_Ok":
                ratingRange = [0, 6];
                break;
            case "No_rating":
                ratingRange = [0];
                break;
            default:
                ratingRange = [11];
        }
        return ratingRange;
    }
    getFilteredProperties(filter) {
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
                sortingOption = Sequelize.literal(
                    "(" +
                    filter.propertiesIds
                        .map(function (id) {
                            return '"property"."id" = \'' + id + "'";
                        })
                        .join(", ") +
                    ") DESC"
                );
        }
        //

        let fo =
            filter.dogs !== "" ||
                filter.fitness_spa_locker_rooms !== "" ||
                filter.full_body_massage !== "" ||
                filter.daily_maid_service !== "" ||
                filter.laundry !== "" ||
                filter.walking_tours !== "" ||
                filter.live_music_performance !== "" ||
                filter.live_sport_events !== "" ||
                filter.themed_dinner_nights !== "" ||
                filter.movie_nights !== ""
                ? {
                    model: FacilityList,
                    required: true,
                    where: {
                        facilityId: {
                            $and: [
                                this.getFacilityId(filter.dogs),
                                this.getFacilityId(
                                    filter.fitness_spa_locker_rooms
                                ),
                                this.getFacilityId(filter.full_body_massage),
                                this.getFacilityId(filter.daily_maid_service),
                                this.getFacilityId(filter.laundry),
                                this.getFacilityId(filter.walking_tours),
                                this.getFacilityId(
                                    filter.live_music_performance
                                ),
                                this.getFacilityId(filter.live_sport_events),
                                this.getFacilityId(
                                    filter.themed_dinner_nights
                                ),
                                this.getFacilityId(
                                    filter.themed_dinner_nights
                                ),
                                this.getFacilityId(filter.movie_nights)
                            ].filter(id => id !== -1)
                        }
                    }
                    // include: [{ model: Facility }],
                    // required: true,
                }
                : { model: FacilityList };

        let bedsInRoomOption =
            filter.queen_bed ||
                filter.Full_bed ||
                filter.Twin_bed ||
                filter.King_bed
                ? {
                    model: BedInRoom,
                    required: true,
                    where: {
                        count: { $gte: filter.bedsCount },
                        bedTypeId: {
                            $in: [
                                this.getBedTypeId(filter.queen_bed),
                                this.getBedTypeId(filter.Full_bed),
                                this.getBedTypeId(filter.Twin_bed),
                                this.getBedTypeId(filter.King_bed)
                            ]
                        }
                    }
                }
                : {
                    model: BedInRoom,
                    where: {
                        count: { $gte: filter.bedsCount }
                    }
                };

        let roomPriceOption =
            filter.US0_US30 !== "" ||
                filter.US30_US60 !== "" ||
                filter.US60_US90 !== "" ||
                filter.US90 !== ""
                ? {
                    $or: [
                        { $between: this.getPriceRange(filter.US0_US30) },
                        { $between: this.getPriceRange(filter.US30_US60) },
                        { $between: this.getPriceRange(filter.US60_US90) },
                        { $between: this.getPriceRange(filter.US90) }
                    ]
                }
                : { $between: [0, 1000000] };

        let offsetData = filter.page ? 5 * (filter.page - 1) : 0;

        let propertyOption=
            filter.Wonderful !== "" ||
                filter.Very_Good !== "" ||
                filter.Good !== "" ||
                filter.Pleasant !== "" ||
                filter.Its_Ok !== "" ||
                filter.No_rating !== ""
                ? {
                    id: { $in: filter.propertiesIds },
                    rating: {
                        $or: [
                            { $between: this.getRatingRange(filter.Wonderful) },
                            { $between: this.getRatingRange(filter.Very_Good) },
                            { $between: this.getRatingRange(filter.Good) },
                            { $between: this.getRatingRange(filter.Pleasant) },
                            { $between: this.getRatingRange(filter.Its_Ok) },
                            { $between: this.getRatingRange(filter.No_rating) }
                        ]
                    }
                }
                : {  id: { $in: filter.propertiesIds }};

        let minPrice;
        this.model.findAll({
            where: propertyOption,

            distinct: true,
            order: [[Room, "price", "ASC"]],
            include: [

                fo,

                {
                    model: Room,
                    required: true,
                    where: {
                        amount: { $gte: filter.rooms },
                        price: roomPriceOption
                    },
                    include: [
                        bedsInRoomOption
                    ]
                }
            ]
        }).then(properties => {
            if (properties[0] && properties[0].rooms[0]) {
                minPrice = properties[0].rooms[0].price;
            }
        });


        return this.model
            .findAndCountAll({
                limit: 5,
                offset: offsetData,
                where:propertyOption,

                distinct: true,
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
                        model: Currency
                    },

                    fo,

                    {
                        model: Room,
                        required: true,
                        where: {
                            amount: { $gte: filter.rooms },
                            price: roomPriceOption
                        },
                        include: [
                            RoomType,

                            bedsInRoomOption,
                            {
                                model: Reservation,
                                required: false,
                                where: {
                                    $or: [
                                        { dateIn: { $gt: filter.dateOut } },
                                        { dateOut: { $lt: filter.dateIn } }

                                    ]
                                }
                            }
                        ]
                    }
                ]
            })
            .then(properties => {
                let propertiesArray = [];
                for (let index in properties.rows) {
                    let property = properties.rows[index].get({ plain: true });
                    property.rooms.forEach((room) => {
                        if (room.price === minPrice) {
                            property.isCheapest = true;
                        }
                    });
                    propertiesArray.push(property);
                }
                return {
                    properties: propertiesArray,
                    propertiesCount: properties.count
                };
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
                    // },

                    {
                        model: Room,

                        include: [
                            { model: RoomType },
                            {
                                model: BedInRoom
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
                userId: id
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
                        },
                        {
                            model: RoomType
                        }
                    ]
                },
                {
                    model: Image,
                    attributes: ["id", "url", "propertyId", "roomId"]
                },
                {
                    model: Review
                }
            ]
        });
    }
}

module.exports = new PropertyRepository(propertyModel);

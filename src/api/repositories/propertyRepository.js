import Reservation from '../models/Reservation';
import BedInRoom from '../models/BedInRoom';
import RoomType from '../models/RoomType';
const sequelize = require('sequelize');
const Repository = require('./generalRepository');
const propertyModel = require('../models/Property');
const Facility = require('../models/Facility');
const PaymentType = require('../models/PaymentType');
const Room = require('../models/Room');
const AccommodationRule = require('../models/AccommodationRule');


const User = require('../models/User');
const City = require('../models/City');
const PropertyType = require('../models/PropertyType');

const Review = require('../models/Review');

const Favorite = require('../models/Favorite');

class PropertyRepository extends Repository {
    getDetailsById(id) {
        return this.model.findOne({
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
        }).then(x => {
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
        return this.model.findAll({
            where: {
                filter:filter
            },
            include: [
                City,
                PropertyType,
                RoomType,
                BedInRoom,
                Reservation,
                {
                    model: Review,
                    include: [User]
                },
                Facility,
                Room
            ]
            // }).then(result => {
            //     return Property.count({

            //         where: {
            //             propertyId: x.id
            //         }
            //     }).then(likes => {
            //         x.dataValues.likes = likes;
            //         return x;
            //     });
            // });
        }

    }
}
module.exports = new PropertyRepository(propertyModel);

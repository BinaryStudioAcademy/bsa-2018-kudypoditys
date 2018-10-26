const Sequelize = require("sequelize"),
    orm = require("../orm"),
    PaymentType = require('./PaymentType'),
    User = require('./User'),
    Room = require('./Room');

let Reservation = orm.define("reservation", {
    dateIn: {
        type: Sequelize.DATE,
        validate: { isDate: true }
        // allowNull: false
    },
    dateOut: {
        type: Sequelize.DATE,
        validate: { isDate: true }
        // allowNull: false
    },
    guestsCount: {
        type: Sequelize.INTEGER,
        validate: { min: 1 }
        // allowNull: false
    },
    orderCode: {
        type: Sequelize.STRING
    },

    userId: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id',
        }
      },

    roomId: {
        type: Sequelize.INTEGER,
        references: {
          model: Room,
          key: 'id',
        }
      },

    paymentTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: PaymentType,
          key: 'id',
        }
      },

    priceTotal: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
});

module.exports = Reservation;

const
  Sequelize = require('sequelize'),
  orm = require('../orm');

let BasicFacility = orm.define('basicFacility', {

  hasParking: {
    type: Sequelize.BOOLEAN,
  },
  isFree: {
    type: Sequelize.BOOLEAN
  },
  isPrivate: {
    type: Sequelize.BOOLEAN
  },
  isOnTerritory: {
    type: Sequelize.BOOLEAN
  },
  needToBook: {
    type: Sequelize.BOOLEAN
  },
  parkingPrice: {
    type: Sequelize.DOUBLE
  },

  hasInternet: {
    type: Sequelize.BOOLEAN,
  },
  internetPrice: {
    type: Sequelize.DOUBLE
  },

  propertyId: {
    type: Sequelize.INTEGER,
    unique: true,
  }

});

module.exports = BasicFacility;

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addConstraint("countries", ["icon"], {
        type: "unique",
        name: "countries_flagUrl_key"
    });
  },

  down: (queryInterface, Sequelize) => {
      queryInterface.removeConstraint("countries", "countries_flagUrl_key");
  }
};

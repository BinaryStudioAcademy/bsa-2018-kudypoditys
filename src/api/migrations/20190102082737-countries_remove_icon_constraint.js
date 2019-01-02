'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.removeConstraint("countries", "countries_icon_key");
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.addConstraint("countries", ["icon"], {
        type: "unique",
        name: "countries_icon_key"
    });
  }
};

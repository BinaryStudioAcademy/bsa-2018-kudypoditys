'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn("countries", "icon", "flagUrl");
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.renameColumn("countries", "flagUrl", "icon");
  }
};

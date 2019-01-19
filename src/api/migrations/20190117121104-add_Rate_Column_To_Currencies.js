module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.addColumn(
        'currencies',
        'rate',
       Sequelize.DOUBLE
      )
    },

    down: function(queryInterface, Sequelize) {
      return queryInterface.removeColumn(
        'currencies',
        'rate'
      );
    }
  }
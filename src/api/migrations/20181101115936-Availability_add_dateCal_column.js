'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.addColumn(
            'availabilities',
            'dateCal',
            {
                type: Sequelize.DATE,
                allowNull: true,
            }
        );
        // queryInterface.addConstraint('availabilities', ['roomId', 'dateCal'], {
        //     type: 'unique',
        //     name: 'roomId_dateCal_unique_constraint'
        // }).catch(err=>{
        //     console.log(err)
        // });
    },

    down: function (queryInterface, Sequelize) {
        queryInterface.removeColumn(
            'availabilities',
            'dateCal'
        );
        //     queryInterface.removeConstraint(
        //         'availabilities',
        //         'roomTypeId_dateCal_unique_constraint'
        //     )
        // }
    }
}

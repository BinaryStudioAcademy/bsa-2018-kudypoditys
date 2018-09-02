const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Review = orm.define('review', {
    pros: {
        type: Sequelize.TEXT

    },
    cons: {
        type: Sequelize.TEXT

    },

    Cleanliness: {
        type: Sequelize.FLOAT,
    },
    Price: {
        type: Sequelize.FLOAT,
    },
    Comfort: {
        type: Sequelize.FLOAT,
    },
    Facilities: {
        type: Sequelize.FLOAT,
    },
    Location: {
        type: Sequelize.FLOAT,
    },

    avgReview: {
        type: Sequelize.FLOAT,
    }

});

module.exports = Review;

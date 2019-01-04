const Sequelize = require('sequelize'),
    orm = require('../orm');

const Review = orm.define('review', {
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
    },
    anon: {
        type: Sequelize.BOOLEAN,
    }
});

Review.associate = function (models) {
    Review.belongsTo(models.User);
    Review.belongsTo(models.Property);

    Review.hasMany(models.ScoreByCategory);

    Review.belongsToMany(models.ReviewCategory, {
        through: "scoreByCategory"
    });
};

module.exports = Review;

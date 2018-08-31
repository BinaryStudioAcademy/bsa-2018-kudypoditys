const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Review = orm.define('review', {
    content: {
        type: Sequelize.TEXT

    },
    // rating: {
    //     type: Sequelize.NUMBER
    // }
});

module.exports = Review;

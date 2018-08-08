const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    User = require('./User'),
    Property = require('./Property');

let Review = orm.define('review', {
    content: {
        type: Sequelize.TEXT
    },
    createdAt: {
        type: Sequelize.DATE
    }
});
Review.belongsTo(User);
Review.belongsTo(Property);

module.exports = Review;

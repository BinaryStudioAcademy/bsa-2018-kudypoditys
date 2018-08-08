const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Review = orm.define('review', {
    content: {
        type: Sequelize.TEXT
    },
    createdAt: {
        type: Sequelize.DATE
    }
});



module.exports = Review;


const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Reservation =require ('./Reservation')

 let Message = orm.define('messsage', {
    body: {
        type: Sequelize.TEXT
    }
});

Message.belongsTo(Reservation);

module.exports = Message;
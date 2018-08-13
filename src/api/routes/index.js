const user = require('./userRoutes');
const property = require('./propertyRoutes');
const message = require('./messageRoutes');
const review = require('./reviewRoutes');
const reservation = require('./reservationRoutes');
const room = require('./roomRoutes');
const accommodationRule = require('./accommodationRuleRoutes');
const userSettings = require('./userSettingsRoutes');
const image = require('./imageRoutes');
const favorite = require('./favoriteRoutes');
const discount = require('./discountRoutes');
const roomDiscount = require('./roomDiscountRoutes');
const bedInRoom = require('./bedInRoomRoutes');
//
// module.exports = app => {
//     app.use('/user', user);
//     app.use('/property', property)
// };

module.exports = function (app) {
    app.use('/users', user);
    app.use('/property', property);
    app.use('/message', message);
    app.use('/review', review);
    app.use('/reservation', reservation);
    app.use('/room', room);
    app.use('/accommodation-rule', accommodationRule);
    app.use('/user-settings', userSettings);
    app.use('/image', image);
    app.use('/favorite', favorite);
    app.use('/discount', discount);
    app.use('/room-discount', discount);
    app.use('/bed-in-room', bedInRoom);
};
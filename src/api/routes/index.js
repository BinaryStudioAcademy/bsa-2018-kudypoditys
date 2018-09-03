const auth = require("./authRoutes");
const user = require("./userRoutes");
const property = require("./propertyRoutes");
const message = require("./messageRoutes");
const review = require("./reviewRoutes");
const reservation = require("./reservationRoutes");
const room = require("./roomRoutes");
const accommodationRule = require("./accommodationRuleRoutes");
const userSettings = require("./userSettingsRoutes");
const image = require("./imageRoutes");
const favorite = require("./favoriteRoutes");
const discount = require("./discountRoutes");
const roomDiscount = require("./roomDiscountRoutes");
const bedInRoom = require("./bedInRoomRoutes");
const searchProperty = require("./searchPropertyRoutes");
const country = require('./countryRoutes');
const facility = require('./facilityRoutes');
const language = require('./languageRoutes');

const elasticsearch = require("./elasticsearchRoutes");

module.exports = function (app) {
    app.use('/api', auth);
    app.use("/elastic", elasticsearch);
    app.use("/api/users", user);
    app.use("/api/facility", facility);
    app.use("/api/language", language);
    app.use("/api/property", property);
    app.use("/api/message", message);
    app.use("/api/review", review);
    app.use("/api/reservation", reservation);
    app.use("/api/room", room);
    app.use("/api/accommodation-rule", accommodationRule);
    app.use("/api/user-settings", userSettings);
    app.use("/api/image", image);
    app.use("/api/favorite", favorite);
    app.use("/api/discount", discount);
    app.use("/api/room-discount", roomDiscount);
    app.use("/api/bed-in-room", bedInRoom);
    app.use('/api/search-property', searchProperty);
    app.use('/api/country', country);

};

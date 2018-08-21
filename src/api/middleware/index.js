const passportMiddleware = require("./passport.middleware");
const { unless } = require("../helpers");

const IGNORE_ROUTES = ["/api/login", "/api/signup", "/api/refreshtoken"];

module.exports = app => {
    // app.use(unless(IGNORE_ROUTES, jwtMiddleware));
};

const passportMiddleware = require("./passport.middleware");
const { apply } = require("../helpers");
const AUTH_PATHS = require("../../../config/authPaths");

module.exports = app => {
    app.use(apply(AUTH_PATHS, passportMiddleware));
};

// object(url, method), apply routes

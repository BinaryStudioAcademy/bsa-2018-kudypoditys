const jwt = require("jsonwebtoken");
const settings = require("../../../config/settings");
const passport = require("passport");

module.exports = passport.authenticate("jwt", {session: false});

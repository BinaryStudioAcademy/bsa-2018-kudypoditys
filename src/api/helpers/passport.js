const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userService = require("../services/user");
const bcrypt = require("bcrypt");
const settings = require("../../../config/settings");

const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: settings.jwtPrivateKey
};

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        function (email, password, callback) {
            userService
                .getUserByEmail(email)
                .then(user => {
                    if (!user) {
                        return callback(null, false, "Email is incorrect");
                    } else {
                        if (!bcrypt.compareSync(password, user.password))
                            return callback(
                                null,
                                false,
                                "Password is incorrect"
                            );
                        else {
                            return callback(null, user, "Logged in");
                        }
                    }
                })
                .catch(err => {
                    return callback(err, false, err.message);
                });
        }
    )
);

passport.use(
    new JWTStrategy(opts, function (jwtPayload, cb) {
        return userService
            .findById(jwtPayload.userId)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    })
);

module.exports = passport;

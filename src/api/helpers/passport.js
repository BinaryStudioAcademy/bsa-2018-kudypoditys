const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userService = require("../services/user");
const bcrypt = require("bcrypt");

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        function(email, password, callback) {
            userService
                .getUserByEmail(email)
                .then(user => {
                    if (!user) {
                        return callback(null, false, {
                            message: "Email is incorrect"
                        });
                    } else {
                        if (!bcrypt.compareSync(password, user.password))
                            return callback(null, false, {
                                message: "Password is incorrect"
                            });
                        else {
                            return callback(null, user, {
                                message: "Logged in"
                            });
                        }
                    }
                })
                .catch(err => {
                    return callback(null, false, { message: err.message });
                });
        }
    )
);

module.exports = passport;

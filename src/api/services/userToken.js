const Service = require("./generalService");
const userRefreshTokenRepository = require("../repositories/userRefreshTokenRepository");
const jwt = require("jsonwebtoken");
const settings = require("../../../config/settings");
const { dateHelpers } = require("../helpers");

class UserTokenService extends Service {
    getByUserId(userId) {
        return this.repository.getRefreshTokenByUserId(userId);
    }

    generateForUser(userId) {
        const currDate = dateHelpers.toUnixTimeSeconds(new Date());
        const refreshToken = jwt.sign(
            { userId },
            settings.jwtRefreshTokenPrivateKey,
            { expiresIn: currDate + settings.refreshTokenLife }
        );
        return this.repository
            .upsert({
                refreshToken: refreshToken,
                tillDate: currDate + settings.refreshTokenLife,
                userId: userId
            })
            .then(() => {
                return refreshToken;
            });
    }
    generateAccessToken(userId) {
        const expiresDate = this.getExpiresDate();

        const toSign = {
            userId
        };

        return jwt.sign(toSign, settings.jwtPrivateKey, {
            expiresIn: expiresDate
        });
    }

    getExpiresDate() {
        const secondsFromUnixEpoch = dateHelpers.toUnixTimeSeconds(new Date());
        return secondsFromUnixEpoch + settings.accessTokenLife;
    }

    refreshToken(oldRefreshToken) {
        let userId;
        try {
            userId = jwt.verify(
                oldRefreshToken,
                settings.jwtRefreshTokenPrivateKey
            ).userId;
        } catch (err) {
            return Promise.reject(new Error("invalid refresh token"));
        }

        return this.getByUserId(userId)
            .then(model => {
                if (!model) {
                    //if user singup but not login
                    return Promise.reject(new Error("refresh token not found"));
                }
                const { refreshToken } = model.dataValues;
                const { tillDate } = model.dataValues;
                const currDate = dateHelpers.toUnixTimeSeconds(new Date());

                if (refreshToken !== oldRefreshToken) {
                    return Promise.reject(
                        new Error("unknown refresh token for this user")
                    );
                }
                if (tillDate < currDate) {
                    return Promise.reject(
                        new Error("refresh token is expired. Make login")
                    );
                }

                return this.generateForUser(userId);
            })
            .then(newRefreshToken => ({
                refreshToken: newRefreshToken,
                ...this.generateAccessToken(userId)
            }));
    }
}

module.exports = new UserTokenService(userRefreshTokenRepository);

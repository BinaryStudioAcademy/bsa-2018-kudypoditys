const Service = require("./generalService");
const userRefreshTokenRepository = require("../repositories/userRefreshTokenRepository");
const jwt = require('jsonwebtoken');
const settings = require('../../../config/settings');
const bcrypt = require('bcrypt');
const uuidv1 = require('uuid/v1');
const { dateHelpers } = require('../helpers');


class UserRefreshTokenService extends Service {
    getByUserId(userId) {
        return this.repository.getRefreshTokenByUserId(userId);
    }

    generateForUser(userId) {
        const refreshToken = jwt.sign({ userId }, settings.jwtRefreshTokenPrivateKey);
        const currDate = dateHelpers.toUnixTimeSeconds(new Date());
        return this.repository.upsert({
            refreshToken: refreshToken,
            tillDate: currDate + settings.refreshTokenLife,
            userId: userId
        }).then(() => refreshToken);
    }
}

module.exports = new UserRefreshTokenService(userRefreshTokenRepository);

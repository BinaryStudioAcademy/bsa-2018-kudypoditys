const Repository = require("./generalRepository");
const userRefreshTokenModel = require(".././models/UserRefreshToken");

class UserRefreshTokenRepository extends Repository {
    getRefreshTokenByUserId(userId) {
        return this.model.findOne({
            where: { userId }
        });
    }
}

module.exports = new UserRefreshTokenRepository(userRefreshTokenModel);

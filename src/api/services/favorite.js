const Service = require('./generalService');
const favoriteRepository = require("../repositories/favoriteRepository");

class FavoriteService extends Service {
    // todo add service logic
}

module.exports = new FavoriteService(favoriteRepository);
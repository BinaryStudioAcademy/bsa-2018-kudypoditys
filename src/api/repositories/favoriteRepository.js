const Repository = require('./generalRepository');
const favoriteModel = require('../models/Favorite');

class FavoriteRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new FavoriteRepository(favoriteModel);
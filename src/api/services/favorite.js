const Service = require('./generalService');
const favoriteRepository = require("../repositories/favoriteRepository");

class FavoriteService extends Service {
    getAllFavorites() {
        return favoriteRepository.findAll();
    }

    getFavoriteById(id) {
        return favoriteRepository.findById(id);
    }

    addFavorite(favorite) {
        return favoriteRepository.create(favorite);
    }

    updateFavorite(id, favorite) {
        return favoriteRepository.updateById({_id: id}, favorite);
    }

    deleteFavorite(id) {
        return favoriteRepository.deleteById({_id: id});
    }
}



module.exports = new FavoriteService(favoriteRepository);
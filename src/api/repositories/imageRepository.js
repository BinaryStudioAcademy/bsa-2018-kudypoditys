const Repository = require('./generalRepository');
const imageModel = require('../models/Image');

class ImageRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new ImageRepository(imageModel);
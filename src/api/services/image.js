const Service = require('./generalService');
const imageRepository = require("../repositories/imageRepository");

class ImageService extends Service {
    // todo add service logic
}

module.exports = new ImageService(imageRepository);
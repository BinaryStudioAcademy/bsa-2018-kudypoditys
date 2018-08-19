const Service = require('./generalService');
const imageRepository = require("../repositories/imageRepository");

class ImageService extends Service {
    getAllImages() {
        return imageRepository.findAll();
    }

    getImageById(id) {
        return imageRepository.findById(id);
    }

    addImage(image) {
        return imageRepository.create(image);
    }

    updateImage(id, image) {
        return imageRepository.updateById({_id: id}, image);
    }

    deleteImage(id) {
        return imageRepository.deleteById({_id: id});
    }
}

module.exports = new ImageService(imageRepository);
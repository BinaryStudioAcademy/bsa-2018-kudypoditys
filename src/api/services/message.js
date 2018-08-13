const Service = require('./generalService');
const messageRepository = require("../repositories/messageRepository");

class MessageService extends Service {
    getAllMessages() {
        return messageRepository.findAll();
    }

    getMessageById(id) {
        return messageRepository.findById(id);
    }

    addMessage(message) {
        return messageRepository.create(message);
    }

    updateMessage(id, message) {
        return messageRepository.updateById({_id: id}, message);
    }

    deleteMessage(id) {
        return messageRepository.deleteById({_id: id});
    }
}


module.exports = new MessageService(messageRepository);
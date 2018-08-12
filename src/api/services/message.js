const Service = require('./generalService');
const messageRepository = require("../repositories/messageRepository");

class MessageService extends Service {
    // todo add service logic
}

module.exports = new MessageService(messageRepository);
const Repository = require('./generalRepository');
const messageModel = require('../models/Message');

class MessageRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new MessageRepository(messageModel);
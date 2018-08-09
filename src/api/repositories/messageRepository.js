const Repository = require("./generalRepository");
const models = require(apiRoot + '/models');


function MessageRepository() {
    models.then(({
                     Message
                 }) => {
        //here
    });
}


module.exports = new MessageRepository()
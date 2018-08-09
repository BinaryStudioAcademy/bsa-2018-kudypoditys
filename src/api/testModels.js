const apiRoot='./';
const models = require(apiRoot + '/models');

module.exports = () => {
    models.then(({
        User
    }) => {
        User.create({
            firstName: 'John',
            lastName: 'Doe'
        }).then(() => {
            // User created.
            User.findAll().then(console.log);
        });
    });

    // Continue...
};


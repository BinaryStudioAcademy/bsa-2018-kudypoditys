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

    models.then(({
        Country
    }) => {
        Country.create({
            name: 'Ukraine'
        }).then(() => {
            Country.findAll().then(console.log);
        })
    })
};


const user = require('./userRoutes');

module.exports = app => {
    app.use('user', user);
};
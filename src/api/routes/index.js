const user = require('./userRoutes');
const property = require('./propertyRoutes');


//
// module.exports = app => {
//     app.use('/user', user);
//     app.use('/property', property)
// };

module.exports = function (app) {
    app.use('/users', user);
    app.use('/property', property)
};
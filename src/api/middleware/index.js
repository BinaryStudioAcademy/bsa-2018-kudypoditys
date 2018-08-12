const jwtMiddleware = require('./jwt.middleware');
const { unless } = require('../helpers');

const IGNORE_ROUTES = [
    '/login'
];

module.exports = (app) => {
    app.use(unless(IGNORE_ROUTES, jwtMiddleware));
};
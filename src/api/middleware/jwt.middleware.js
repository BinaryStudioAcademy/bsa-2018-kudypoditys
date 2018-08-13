const jwt = require('jsonwebtoken');
const settings = require('../../../config/settings');

const jwtMiddleware = (req, res, next) => {
    const token = req.cookies.jwtToken;
    let user;
    try {
        user = jwt.verify(token, settings.jwtPrivateKey);
    } catch (err) {
        res.status(401).send('Not authorized');
        return;
    }

    req.user = user;

    next();
};

module.exports = jwtMiddleware;

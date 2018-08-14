const jwt = require('jsonwebtoken');
const settings = require('../../../config/settings');
const { dateHelpers } = require('../helpers');

const jwtMiddleware = (req, res, next) => {
    const token = req.cookies.jwtToken;
    let user;
    try {
        user = jwt.verify(token, settings.jwtPrivateKey);
    } catch (err) {
        res.status(401).send('Not authorized');
        return;
    }

    const unixSeconds = dateHelpers.toUnixTimeSeconds(new Date());
    if (user.expiresIn <= unixSeconds) {
        res.status(401).send('Access token expired');
        return;
    }

    req.user = user;



    next();
};

module.exports = jwtMiddleware;

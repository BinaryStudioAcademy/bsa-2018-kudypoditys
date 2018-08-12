const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    const token = req.cookies.jwtToken;
    let user;
    try {
        user = jwt.verify(token, 'mySecret');
    } catch (err) {
        res.status(401).send('Not authorized');
        return;
    }

    req.user = user;

    next();
};

module.exports = jwtMiddleware;
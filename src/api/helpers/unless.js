const unless = (pathes, middleware) => {
    return (req, res, next) => {
        for (let path of pathes) {
            if (path === req.path)
                return next();
        }

        return middleware(req, res, next);
    };
};

module.exports = unless;
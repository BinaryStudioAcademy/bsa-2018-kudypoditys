const unless = (pathes, middleware) => {
    return (req, res, next) => {
        for (let path of pathes) {
            if (req.path.indexOf(path) === 0) return next();
        }

        return middleware(req, res, next);
    };
};

module.exports = unless;

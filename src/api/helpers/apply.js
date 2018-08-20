const apply = (pathes, middleware) => {
    return (req, res, next) => {
        for (let path of pathes) {
            console.log(JSON.stringify(path));
            console.log("url path: " + path.url);
            if (
                path.url.indexOf(req.path) === 0 &&
                req.method.toLowerCase() === path.method.toLowerCase()
            )
                return middleware(req, res, next);
        }

        return next();
    };
};

module.exports = apply;

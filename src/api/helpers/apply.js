const apply = (pathes, middleware) => {
    return (req, res, next) => {
        if (needsAuth(req.method, req.path, pathes))
            return middleware(req, res, next);
        return next();
    };
};

function needsAuth(reqMethod, reqPath, pathes) {
    return pathes.reduce((accum, path) => {
        const regex = new RegExp(path.url);
        reqMethod = reqMethod.toLowerCase();
        return accum || regex.test(reqPath) && path.methods && path.methods.includes(reqMethod);
    }, false);
}

module.exports = apply;

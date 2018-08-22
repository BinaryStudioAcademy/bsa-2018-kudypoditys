const apply = (pathes, middleware) => {
    return (req, res, next) => {
        if (needsAuth(req.method, req.path, pathes))
            return middleware(req, res, next);
        return next();
    };
};

function needsAuth(reqMethod, reqPath, pathes) {
    for (let path of pathes) {
        let methodNeedsAuth = false;
        if (path.methods === null) {
            if (path.url.indexOf(reqPath) === 0) return true;
            return false;
        }
        for (let i = 0; i < path.methods.length; i++) {
            if (reqMethod.toLowerCase() === path.methods[i].toLowerCase()) {
                methodNeedsAuth = true;
                break;
            }
        }
        if (methodNeedsAuth && path.url.indexOf(reqPath) === 0) return true;
    }
    return false;
}

module.exports = apply;

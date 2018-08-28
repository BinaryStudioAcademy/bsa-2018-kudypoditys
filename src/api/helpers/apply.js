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
            if (reqPath.indexOf(path.url) === 0) return true;
            return false;
        }
        for (let i = 0; i < path.methods.length; i++) {
            if (reqMethod.toLowerCase() === path.methods[i].toLowerCase()) {
                methodNeedsAuth = true;
            }
        }
        if (
            methodNeedsAuth &&
            reqPath.indexOf(path.url) === 0 &&
            reqPath !== "/"
        )
            return true;
    }
    return false;
}

module.exports = apply;

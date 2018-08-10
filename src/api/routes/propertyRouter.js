const express = require('express');
const router = express.Router();


router.use(function (req, res, next) {
    // something here
    next();
});

module.exports = router;

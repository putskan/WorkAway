const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // jwt verification
    if (!req.header('token')) return res.status(401).send('Access Denied');
    try {
        // if success, contain the user ID and the creation time (iat)
        req.user = jwt.verify(req.header('token'), process.env.JWT_SECRET);
        next();
    } catch {
        res.status(400).send('Invalid Token');
    }
}


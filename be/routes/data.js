const router = require('express').Router();
const User = require('../model/User');
const verifyToken = require('./verifyToken');
const jwt_decode = require('jwt-decode');


router.get('/userinfo', verifyToken, async (req, res) => {
    const userID = jwt_decode(req.header('auth-token'))
    const userDoc = await User.findOne({_id: userID});
    const user = userDoc['_doc'];
    // remove unwanted fields
    const keysToRemove = ['password', '_id', 'date', '__v'];  
    filteredUser = {},
    keys = new Set(Object.keys(user));
    keysToRemove.forEach(k => keys.delete(k));
    [...keys].forEach(k => filteredUser[k] = user[k]);
    return res.status(200).send(filteredUser);
});

module.exports = router;

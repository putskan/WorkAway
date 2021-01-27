const router = require('express').Router();
const User = require('../model/User');
const verifyToken = require('./verifyToken');
const jwt_decode = require('jwt-decode');
const { setUserInfoValidation } = require('../validation');

// http://localhost:9000/api/data/userinfo
router.post('/setUserInfo', verifyToken, async (req, res) => {
    const userID = jwt_decode(req.header('token'))
    // Validations
    const error_msg = setUserInfoValidation(req.body);
    if (error_msg) return res.status(400).send(error_msg);
    const emailQueryResult = await User.findOne({email: req.body.email, _uid: { $ne: userID }})
    if (emailQueryResult) return res.status(400).send('Email Already Taken');
    const usernameResult = await User.findOne({username: req.body.username, _uid: { $ne: userID }})
    if (usernameResult) return res.status(400).send('Username Already Taken');
    // update user if exists
    // console.log(await User.findOne({_uid: req.body.email, _uid: { $ne: userID }})
    const newDoc = await User.findOneAndUpdate({_id: userID}, {$set: { username: req.body.username, 
            email: req.body.email, firstName: req.body.firstName,
            lastName: req.body.lastName, city: req.body.city, country: req.body.country,
            postalCode: req.body.postalCode, aboutMe: req.body.aboutMe } }, 
        {new: true}, 
        (err, _doc) => {
        if (err) {
            return res.status(400).send('Unknown error, please try again later');
        }
    });
    return res.status(200).send('Success!');
});

module.exports = router;

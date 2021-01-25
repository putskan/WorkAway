const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const error_msg = registerValidation(req.body);
    if (error_msg) return res.status(400).send(error_msg);

    const emailQueryResult = await User.findOne({email: req.body.email})
    if (emailQueryResult) return res.status(400).send('Email Already Taken');
    
    const usernameResult = await User.findOne({username: req.body.username})
    if (usernameResult) return res.status(400).send('Username Already Taken');


    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log(hashPassword);

    const user = new User({
        company: req.body.company,
        username: req.body.username,
        password: hashPassword,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city,
        country: req.body.country,
        postalCode: req.body.postalCode,
        aboutMe: req.body.aboutMe
    });
    try {
        await user.save();
        res.send({user: user._id});

    } catch(err){
        res.status(400).send(err);
    }
});


router.post('/login', async (req, res) => {
    const error_msg = loginValidation(req.body);
    if (error_msg) return res.status(400).send(error_msg);
   
    const user = await User.findOne({username: req.body.username});
    if (!user) return res.status(400).send('Username or password are incorrect');

    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send('Username or password are incorrect!');
    }
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
    res.header('auth-token', token);
    return res.status(200).send({user: user._id});
});

module.exports = router;
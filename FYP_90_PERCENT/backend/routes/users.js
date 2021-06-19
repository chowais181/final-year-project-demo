const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const secret=process.env.SECRET;



router.route('/login').post((req, res) => {
    authenticate(req.body)
    .then(user => user ? res.status(200).json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => res.status(400).json('Error: ' + err));
});

async function authenticate({ username, password }) {
    var usernamelower=username.toLowerCase();
    // console.log(usernamelower);
    const user = await User.findOne({ username:usernamelower });
   
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({ userdetails:user }, secret, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}


router.route('/signup').post((req, res) => {
    create(req.body)
    .then(() => res.json({}))
    .catch(err => res.status(400).json('Error: ' + err));
});

async function create(userParam) {
    // validate
    var username=userParam.username.toLowerCase();
    var designation=userParam.designation.toLowerCase();
    var userParamLower={username:username,password:userParam.password, designation:designation};
    if (await User.findOne({ username: username })) {
        throw 'Username "' + username + '" is already taken';
    }

    const user = new User(userParamLower);

    // hash password
    if (userParamLower.password) {
        user.hash = bcrypt.hashSync(userParamLower.password, 10);
    }

    // save user
    await user.save();
}

module.exports = router;
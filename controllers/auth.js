const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
    const candidate = await User.findOne({ email: req.body.email });
    
    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            },keys.jwt,{expiresIn:60*60} )
            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(400).json({
               message:'Password is incorrect'
           }) 
        }
    } else {
        res.status(400).json({
            message: 'Email not found'
        })
    }
}

module.exports.register = async function (req, res) {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
        res.status(400).json({
          message: 'This email already exists. Try a new email'
      })  
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try {
            await user.save();
            res.status(200).json(user);  
        } catch(err) {
            errorHandler(res, e)
        }
       
     }
}
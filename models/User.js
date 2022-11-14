const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const userShema = new Schema({
    email: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('user', userShema)
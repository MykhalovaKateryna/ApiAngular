const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const boardShema = new Schema({
    name: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('board', boardShema)



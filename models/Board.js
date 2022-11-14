const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const boardShema = new Schema({
    name: {
        ref:'boardName',
        type: Schema.Types.ObjectId,
        require: true
    },
    //timestamps: true
})

module.exports = mongoose.model('board', boardShema)



const { async } = require('rxjs')
const Board = require('../models/Board')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
    try {
        const boards = await Board.find(req.params.name).sort({date:-1})
        res.status(200).json(boards)
    } catch (error) {
        
    }
}

module.exports.getById = async function (req, res) {
    try {
        const boards = await Board.findById(req.params.id)
        res.status(200).json(boards)
    } catch (er) {
        errorHandler(res,er)
    }
}

module.exports.removeById = async function (req, res) {
   try {
       await Board.remove({ _id: req.params.id })
       res.status(200).json({
           message: "Board was deleted"
       })
   } catch (error) {
    errorHandler(res, error)
   }
}

module.exports.create = async function (req, res) {
    try {
        const board = await new Board({
            name: req.body.name
        }).save().then(() => console.log('added board'))
        res.status(200).json(board)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req, res) {
    const updated = {
        name: req.body.name
    }
    
    try {
        const board = await Board.findOneAndUpdate(
            { _id: req.params.id },
            { $set: updated },
            { new: true }
        )
        res.status(200).json(board)
    } catch (e) {
        errorHandler(res,e)
    }
}






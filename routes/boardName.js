const express = require('express')
const controller = require('../controllers/boardName')
const router = express.Router()

router.get('/', controller.getBoardName)



module.exports = router
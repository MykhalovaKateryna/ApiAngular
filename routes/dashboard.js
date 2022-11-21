const express = require('express')
const controller = require('../controllers/dashboard')
const router = express.Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.removeById)
router.post('/add', controller.create)


module.exports = router
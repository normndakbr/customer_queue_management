const router = require('express').Router()
const customerController = require('../controllers/customerController')

router.post('/newQueue', customerController.newQueue)

module.exports = router
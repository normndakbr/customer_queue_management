const router = require('express').Router()
const customerController = require('../controllers/customerController')

router.post('/newQueue', customerController.newQueue)
router.get('/getAllQueue', customerController.getAllQueue)
router.get('/getQueueById/:id', customerController.getQueueById)

module.exports = router
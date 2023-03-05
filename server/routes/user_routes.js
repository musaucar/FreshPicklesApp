const express = require('express')
const router = express.Router()
const userController = require('../controllers/user_controller')
const UserValidator = require('../express-valid/validations')
const UpdateValidator = require('../express-valid/validations')

router.post('/user-create', UserValidator, userController.createUser)
 
router.get('/user-read', userController.createUser)

router.put('/user-update', UpdateValidator, userController.createUser)

router.delete('/user-delete', userController.createUser)


module.exports = router
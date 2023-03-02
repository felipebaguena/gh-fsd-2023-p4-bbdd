const userController = require('../controllers/userController')

const router = require ('express').Router();

router.post('/users',userController.createUser)
router.post('/users/login',userController.login)

module.exports = router;
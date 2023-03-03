const userController = require('../controllers/userController')

const router = require ('express').Router();

router.post('/users',userController.createUser)
router.post('/users/login',userController.login)
router.delete('/users/:id',userController.deleteUser)


module.exports = router;
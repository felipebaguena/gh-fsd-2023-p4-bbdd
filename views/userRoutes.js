const userController = require('../controllers/userController')

const router = require ('express').Router();

router.post('/users',userController.createUser)
router.post('/users/login',userController.login)
router.delete('/users/:id',userController.deleteUser)
router.get('/users',userController.getUser)
router.get('/users/role/:id',userController.getUserRole)



module.exports = router;
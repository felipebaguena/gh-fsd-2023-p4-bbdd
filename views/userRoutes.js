const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

const router = require ('express').Router();

router.post('/users',userController.createUser)
router.post('/users/login',userController.login)
router.delete('/users/:id',userController.deleteUser)
router.get('/users',userController.getUser)
router.get('/users/role/:id',userController.getUserRole)
router.get('/users/appointments', verifyToken, userController.getAppointment)
router.get('/profile',verifyToken,userController.profile)
router.put('/updateprofile',verifyToken,userController.updateUser)
router.put('/updateprofile/payment',verifyToken,userController.updatePayment)


router.get('/admin/users', verifyToken, isAdmin, userController.getAllUsers)
router.get('/admin/doctors', verifyToken, isAdmin, userController.getDoctors)



module.exports = router;
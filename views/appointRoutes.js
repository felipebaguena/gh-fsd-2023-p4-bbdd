const appointController = require('../controllers/appointController');
const verifyToken = require('../middlewares/verifyToken');

const router = require ('express').Router();

router.get('/appoint',appointController.getAppoint)
router.post('/appoint', verifyToken, appointController.createAppoint)
router.put('/appoint', verifyToken, appointController.updateAppointment)

module.exports = router;
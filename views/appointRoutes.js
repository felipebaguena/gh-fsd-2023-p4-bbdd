const appointController = require('../controllers/appointController')

const router = require ('express').Router();

router.get('/appoint',appointController.getAppoint)
router.post('/appoint',appointController.createAppoint)

module.exports = router;
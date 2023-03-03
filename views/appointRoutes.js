const appointController = require('../controllers/appointController')

const router = require ('express').Router();

router.get('/appoint',appointController.getAppoint)

module.exports = router;
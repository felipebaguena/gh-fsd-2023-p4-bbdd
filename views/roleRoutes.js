const roleController = require('../controllers/roleController')

const router = require ('express').Router();

router.post('/roles',roleController.createRole)

module.exports = router;

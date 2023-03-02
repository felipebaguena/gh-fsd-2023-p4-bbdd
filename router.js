const router = require('express').Router();

const roleRoutes = require('./views/roleRoutes');
const userRoutes = require('./views/userRoutes');



router.use('/', roleRoutes)
router.use('/', userRoutes);




module.exports = router;
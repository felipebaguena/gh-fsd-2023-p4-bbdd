const router = require('express').Router();

const roleRoutes = require('./views/roleRoutes');
const userRoutes = require('./views/userRoutes');
const appointRoutes = require('./views/appointRoutes');


router.use('/', roleRoutes)
router.use('/', userRoutes);
router.use('/', appointRoutes);



module.exports = router;
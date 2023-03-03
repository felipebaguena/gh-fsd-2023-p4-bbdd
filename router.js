const router = require('express').Router();

const appointmentRoutes = require('./models/appointment');
const roleRoutes = require('./views/roleRoutes');
const userRoutes = require('./views/userRoutes');



router.use('/', roleRoutes)
router.use('/', userRoutes);
router.use('/', appointmentRoutes);




module.exports = router;
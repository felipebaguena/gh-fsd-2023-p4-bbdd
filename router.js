const router = require('express').Router();

const roleRoutes = require('./views/roleRoutes');



router.use('/', roleRoutes)





module.exports = router;
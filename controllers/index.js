const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const workoutRoute = require('./workoutRoute');

router.use('/', homeRoutes);
router.use('/', workoutRoute);
router.use('/api', apiRoutes);

module.exports = router;

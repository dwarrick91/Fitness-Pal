const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const singleWorkoutData = require('./singleWorkout')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', singleWorkoutData)

module.exports = router;

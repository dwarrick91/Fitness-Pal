const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoute = require('./workoutRoute')


router.use('/users', userRoutes);
router.use('/workout', workoutRoute)

module.exports = router;

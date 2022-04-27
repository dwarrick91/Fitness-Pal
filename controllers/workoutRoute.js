const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../utils/auth');

router.post('/workout', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.redirect('/profile');
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
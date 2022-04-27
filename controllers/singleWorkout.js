const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../utils/auth');

//view specific workouts in calender
router.get('/workout/:id', withAuth, async (req, res) => {
  try {
    const singleWorkoutData = await Workout.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const workout = singleWorkoutData.get({ plain: true });

    res.render('singleWorkout', {
      ...workout,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
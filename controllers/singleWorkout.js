const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../utils/auth');

//view specific workouts in calender
router.get('/workout/:id', withAuth, async (req, res) => {
  console.log("hit single workout");
  try {
    console.log(req.params.id);
    const singleWorkoutData = await Workout.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const workout = singleWorkoutData.get({ plain: true });
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Workout }],
    });

    const user = userData.get({ plain: true });

    console.log(user);
    const workoutData = await Workout.findAll({
      where: {
        user_id: user.id,
      },
      raw: true,
    });
    res.render('singleWorkout', {
      ...workout,
      workoutData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
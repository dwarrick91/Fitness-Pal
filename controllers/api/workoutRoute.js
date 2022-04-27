const router = require('express').Router();
const { User, Workout } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  // console.log(req.body);
  try {
    const newWorkout = await Workout.create({
      date: req.body.workoutDate,
      type: req.body.workoutType,
      name: req.body.workoutName,
      duration: req.body.workoutLength, 
      reps: req.body.workoutReps,
      notes: req.body.workoutNotes,
      user_id: req.session.user_id,
    });
    res.json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
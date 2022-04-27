const sequelize = require('../config/connection');
const { User, Workout } = require('../models');

const userData = require('./userData.json');
const workoutData = require('./workoutData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const workout of workoutData) {
    await Workout.create({
      ...workout,
    });
  }

  process.exit(0);
};

seedDatabase();

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    reps: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    notes: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;

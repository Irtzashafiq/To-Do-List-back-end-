//This file is for creating table using ORM mathods we are using sequelize

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class tasks extends Model {}

tasks.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },

  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "tasks",
    sequelize,

  }
);

module.exports = tasks;
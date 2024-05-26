//This file is for creating table using ORM mathods we are using sequelize

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class tasks extends Model {}

tasks.init(
  {
    taskId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    TaskName: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(200)
    },
    TaskInfo: {
        type: DataTypes.STRING(1000)
    }

  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "tasks",
    sequelize,

  }
);

module.exports = tasks;
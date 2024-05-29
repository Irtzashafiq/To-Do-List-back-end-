//This file is for creating table using ORM mathods we are using sequelize

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const users = require("./users");


class tasks extends Model {}

tasks.init(
  {
    taskId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    taskName: {
        allowNull: false,
        type: DataTypes.STRING(200)
    },
    taskInfo: {
        type: DataTypes.STRING(1000)
    },
    //userId as a foreign key in task table 
    userId : {     
      type : DataTypes.STRING(255),
      allowNull: false,
      references:{
        model: users,
        key: "userId"
      }
    }
  },
  {
    timestamps: true,
    paranoid: false,
    tableName: "tasks",
    sequelize,

  },
  
);

module.exports = tasks;
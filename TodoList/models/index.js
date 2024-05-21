const sequelize = require("../bin/dbConnection")

const users = require("./definitions/users")
const tasks = require("./definitions/tasks")
const userHasType = require("./definitions/userHasType")
const taskhasType = require("./definitions/taskHasType")


const models = {users, tasks, userHasType, taskhasType};

const db = {};

db.sequelize = sequelize; //create new key in db object
sequelize.models = models; //assigning value to the sequelize models

module.exports = {db,models};
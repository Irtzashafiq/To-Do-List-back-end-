const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");
const tasks = require("./definitions/tasks");
const userHasType = require("./definitions/userHasType");
const taskHasType = require("./definitions/taskHasType");


const models = {users , tasks,userHasType,taskHasType};

const db={};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models}
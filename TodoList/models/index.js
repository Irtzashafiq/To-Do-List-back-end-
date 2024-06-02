const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");
const tasks = require("./definitions/tasks");
// const sessions = require("./definitions/sessions");


const models = {users , tasks};

//All realtions would e in index file

users.hasMany(tasks, {foreignKey : "userId" })
tasks.belongsTo(users, {foreignKey: "userId",})

// users.hasOne(sessions, {foreignKey : "userId"})
// sessions.belongsTo(users, {foreignKey: "userId"})

const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models};
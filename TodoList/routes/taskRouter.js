const route = require("express").Router();

const { getTask, createTask } = require("../controllers/taskController");

route.get("getTask", getTask);
route.post("createTask", createTask);

module.exports = route;

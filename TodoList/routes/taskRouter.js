const route = require("express").Router();

const { getTask, createTask, getAllTasks,updateTask,deleteTask } = require("../controllers/taskController");


route.get("/getTask", getTask);
route.post("/createTask", createTask);
route.get("/getAlltask", getAllTasks);
route.put("/updateTask", updateTask);
route.delete("/deleteTask", deleteTask)


module.exports = route;

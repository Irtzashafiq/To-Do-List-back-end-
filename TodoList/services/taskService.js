const taskModel = require("../models/taskModel");
const {v4 : uuid} = require("uuid");

module.exports = {
  createTask: async(body) => {
    try {
      console.log("check 1")
      body.taskId = uuid();
      const task = await taskModel.createTask(body);
      if (task.error) {
        return {
          error : task.error
        }
      }
      return {
        message: "Task Created",
        response: task.response.dataValues
      }
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },
};

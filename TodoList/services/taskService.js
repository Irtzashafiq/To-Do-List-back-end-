const taskModel = require("../models/taskModel");
const { v4: uuid } = require("uuid");

module.exports = {
  createTask: async (body) => {
    try {
      body.taskId = uuid();
      const task = await taskModel.createTask(body);
      if (task.error) {
        return {
          error: task.error,
        };
      }
      return {
        message: "Task Created",
        response: task.response.dataValues,
      };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },
  getAllTask: async () => {
    try {
      const task = await taskModel.getAllTask();
      if (task.error) {
        return {
          message: "could not get task",
          error: task.error,
        };
      }
      return {
        message: "getting all tasks",
        response: task.response,
      };
    } catch (error) {
      return {
        message: error,
      };
    }
  },
  updateTask: async (body) => {
    try {
      const updateTask = await taskModel.updateTask({ ...body });
      if (updateTask.error || !updateTask.response[0]) {
        return {
          error: {
            message: "Cannot upate task",
            error: updateTask?.error || updateTask.response,
          },
        };
      }
      return {
        response: {
          message: "updated Task successfully",
          response: updateTask.response,
        },
      };
    } catch (error) {
      return {
        error: istask.error,
      };
    }
  },
  deleteTask: async (body) => {
    try {
      const deleteTask = await taskModel.deleteTask(body.taskId);
      if (deleteTask.error || !deleteTask.response) {
        return {
          error: {
            message: "cannot delete task",
            error: deleteTask?.error || deleteTask.response,
          },
        };
      }
      
      return {
        response: {
          message: "task deleted Successfully!",
          response: deleteTask.response,
        },
      };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },
};

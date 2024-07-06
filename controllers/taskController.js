const joi = require("joi");
const taskService = require("../services/taskService");

const getTaskSchema = joi.object().keys({
  taskName: joi.string().min(1).max(33).required(),
  taskInfo: joi.string().max(2000),
});
const createTaskSchema = joi.object().keys({
  taskName: joi.string().min(3).max(255).required(),
  taskInfo: joi.string().max(1000),
  userId: joi.string().length(36).required(),
});
const deleteTaskSchema = joi.object().keys({
  taskId: joi.array().single().required(),
});
const updateTaskSchema = joi.object().keys({
  taskId: joi.string().required(),
  taskName: joi.string().min(3).max(30),
  taskInfo: joi.string().min(0).max(1000),
});

module.exports = {
  getTask: async (req, res) => {
    try {
      const validate = await getTaskSchema.validateAsync(req.query);
      return res.send({
        message: "Get Tasks",
        data: validate,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },

  createTask: async (req, res) => {
    try {
      const validate = await createTaskSchema.validateAsync(req.body);
      const task = await taskService.createTask(validate);
      if (task.error) {
        return res.send({
          error: {
            message: "Unable to create task",
            error: task.error,
          },
        });
      }
      return res.send({
        message: "creating a new task",
        response: task.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllTasks: async (req, res) => {
    try {
      const task = await taskService.getAllTask();
      if (task.error) {
        return res.send({
          error: {
            message: "Cannot get Tasks",
            error: task.error,
          },
        });
      }
      return res.send({
        message: "All Tasks",
        response: task.response,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
  deleteTask: async (req, res) => {
    try {
      //try catch is used so that the server should not crash!

      const validate = await deleteTaskSchema.validateAsync(req.query);
      const deleteTask = await taskService.deleteTask(validate.taskId);
      if (deleteTask.error) {
        return res.send(deleteTask.error);
      }
      return res.send({
        response: deleteTask.response,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
  updateTask: async (req, res) => {
    try {
      const validate = await updateTaskSchema.validateAsync(req.body);
      const updateTask = await taskService.updateTask(validate);
      if (updateTask.error) {
        return res.send(updateTask.error);
      }
      return res.send({
        response: updateTask.response,
      });
    } catch (error) {
      return res.send({ message: error.message });
    }
  },
};

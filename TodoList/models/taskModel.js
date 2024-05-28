const { models } = require("../models/index");

module.exports = {
  createTask: async (body) => {
    try {
      const task = await models.tasks.create({ ...body });

      return {
        response: task,
      };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },
  getTask: async (taskId) => {
    try {
      const task = await models.tasks.findOne({
        where: { taskId: taskId },
      });
      return {
        response: task,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllTask: async () => {
    try {
      console.log("inside model 1");
      const task = await models.tasks.findAll();
      // console.log(task,"=====task")
      console.log("inside model 2");
      return {
        response: task,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updateTask: async ({ taskId, ...body }) => {
    try {
      const updateTask = await models.tasks.update(
        { ...body },
        { where: { taskId, taskId } }
      );
      return {
        response: updateTask,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteTask: async (taskId) => {
    try {
      const deleteTask = await models.tasks.destroy({
        where: { taskId : taskId },
      });
      

      return {
        message: " task deleted",
        response: deleteTask,
      };
      
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },
};

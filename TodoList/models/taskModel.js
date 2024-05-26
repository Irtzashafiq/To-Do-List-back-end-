const { models } = require("../models/index");

module.exports = {
  createTask: async (body) => {
    try {
      const task = await models.tasks.create({...body});
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
};

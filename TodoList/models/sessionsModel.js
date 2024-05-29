const { models } = require("../models/index");

module.exports = {
  createSessions: async (body) => {
    try {
      const session = await models.sessions.create({ ...body });

      return {
        response: session,
      };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },
  getSession: async (sessionId) => {
    try {
      const session = await models.sessions.findOne({
        where: { sessionId: sessionId },
      });
      return {
        response: session,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteSession: async (sessionId) => {
    try {
      const deleteSession = await models.session.destroy({
        where: { sessionId : sessionId },
      });
      

      return {
        message: " Session deleted",
        response: deleteSession,
      };
      
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },
};

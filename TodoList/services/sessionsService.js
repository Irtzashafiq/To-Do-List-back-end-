const sessionsModel = require("../models/sessionsModel");
const sessionModel = require("../models/sessionsModel");
const { v4: uuid } = require("uuid");

module.exports = {
  createSession: async (body) => {
    try {
      body.sessionId = uuid();
      const session = await sessionsModel.createSessions(body);
      if (session.error) {
        return {
          error: session.error,
        };
      }
      return {
        message: "session Created",
        response: session.response.dataValues,
      };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },
  
  
  deleteSession: async (sessionId) => {
    try {
      const deleteSession = await sessionModel.deletesession(sessionId);
      if (deleteSession.error || !deleteSession.response) {
        return {
          error: {
            message: "cannot delete session",
            error: deleteSession?.error || deleteSession.response,
          },
        };
      }
      
      return {
        response: {
          message: "session deleted Successfully!",
          response: deleteSession.response,
        },
      };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },
};

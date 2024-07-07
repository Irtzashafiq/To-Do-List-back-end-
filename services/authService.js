const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv").config;

module.exports = {
  login: async (body) => {
    try {
      const user = await userModel.getUser(false, body.userName);
      // console.log(user, "User retrieved from getUser");
      if (user.error || !user.response) {
        return {
          error: {
            message: "User Not Found",
            error: user?.error || user.response,
          },
        };
      }

      const isValid = await compare(
        body.password,
        user.response.dataValues.password
      );

      if (!isValid) {
        return {
          response: {
            message: "Invalid Credentials",
            response: false,
            token: "undefined",
          },
        };
      }
      delete user.response.dataValues.password;
      const token = sign(user.response.dataValues, process.env.SECRET);
      return {
        response: {
          message: "Logged In successfully",
          response: {
            status: true,
            userId: user.response.userId,
          },

          token: token,
        },
      };
    } catch (error) {
      console.error("Error during login process:", error);
      return {
        error: error,
      };
    }
  },
};

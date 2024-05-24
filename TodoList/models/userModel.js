// const { response } = require("express");
const { models } = require("./index");
// const { updateUser } = require("../controllers/usercontroller");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  //checking user by email or by id
  getUser: async (userId, userName) => {
    try {
      const user = await models.users.findOne({
        ...(userId
          ? { where: { userId: userId } }
          : { where: { userName: userName } }),
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await models.users.findAll();
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteUser: async (userId) => {
    try {
      const deleteUser = await models.users.destroy({
        where: {
          userId: userId,
        },
      });
      return {
        response: deleteUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updateUser: async ({ userId, ...body }) => {//in parameters we are using rest operator to get userId request in userId and all the other fields in body using rest.
    try {
      const updateUser = await models.users.update({...body}, {
        where: {
          userId: userId,
        },
      });
      return {
        response: updateUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};

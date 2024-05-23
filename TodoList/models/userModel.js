
const { models } = require("./index");

module.exports = {
  createUser: async (body) => {
    try {
      //create db record

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
};

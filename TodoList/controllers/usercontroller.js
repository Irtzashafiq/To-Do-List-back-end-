const joi = require("joi");
const userService = require("../services/userService");
const { getAllUsers } = require("../models/userModel");

const getUserSchema = joi.object().keys({
  userName: joi.string().email().required(),
  password: joi.string().min(6).max(12).required(),
});

const createUserSchema = joi.object().keys({
  userName: joi.string().alphanum().max(15).required(),
  password: joi.string().min(8).max(15).required(),
  confirmPassword: joi.ref("password"),
});

const UpdateUserSchema = joi.object().keys({
  email: joi.string().email(),
  password: joi.string().min(8).max(15),
});

const deleteUserSchema = joi.object().keys({
  email: joi.string().email(),
  password: joi.string().min(8).max(15),
});

module.exports = {
  getUser: async (req, res) => {
    try {
      const validate = await getUserSchema.validateAsync(req.query);
      return res.send({
        message: "Get Users",
        data: validate,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },

  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const user = await userService.createUser(validate);

      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },

  updateUser: async (req, res) => {
    try {
      const validate = await UpdateUserSchema.validateAsync(req.body);
      return res.send({
        message: "updated user successfully",
        data: validate,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserSchema.validateAsync(req.query);
      return res.send({
        message: "Deleted User successfully",
        data: validate,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },
  getAllUsers : async (req, res)=>{
    try {
       const users =  await userService.getAllUsers();
       if (users.error) {
        return res.send({
            error: error.message
        })
       }
       return res.send({
        response : users.response
       })
      } catch (error) {
        res.send({
          message: error.message,
        });
  }
}
}

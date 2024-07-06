const joi = require("joi");
const userService = require("../services/userService");

const getUserSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(6).max(12).required(),
});

const createUserSchema = joi.object().keys({
  userName: joi.string().alphanum().max(15).required(),
  password: joi.string().min(8).max(15).required(),
  confirmPassword: joi.ref("password"),
});

const UpdateUserSchema = joi.object().keys({
  userId : joi.string().required(),
  userName: joi.string().alphanum().max(15).required(),
  
});

const deleteUserSchema = joi.object().keys({
  userId : joi.array().single().required()
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
        message: "creating a new user",
        response: user.response,
      });
    } catch (error) {
      return res.send({
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
        return res.send({
          message: error.message,
        });
  }
},
deleteUser : async(req,res)=>{
  try {
    const validate = await deleteUserSchema.validateAsync(req.query)
    const deleteUser = await userService.deleteUser(validate.userId)
    if (deleteUser.error) {
      return res.send({
          error: deleteUser.error
      })
     }
     return res.send({
      response : deleteUser.response
     })
  } catch (error) {
    return res.send({
      message: error.message,
    });
  }
},

updateUser: async (req, res) => {
  try {
    const validate = await UpdateUserSchema.validateAsync(req.body);
    const updateUser = await userService.updateUser(validate)
    if (updateUser.error) {
      return res.send({
          error: updateUser.error
      })
     }
     return res.send({
      response : updateUser.response
     })
  } catch (error) {
    return res.send({
      message: error,
    });
  }
},

}

const joi = require("joi");
const authService = require("../services/authService");

const loginSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(6).max(12).required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const login = await authService.login(validate);
      
      if (login.error) {
        return res.send({
          error: login.error,
        }); 
      }
      return res.send({
        response: login.response,
      });
    } catch (error) {
      return res.send({
        message : error.message
      });
    }
  },
};

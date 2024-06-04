const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");

module.exports = {
  login: async (body) => {
    try {
      const user = await userModel.getUser(false, body.userName);
      // console.log(user, "User retrieved from getUser");
      if (user.error || !user.response) {
        return {
          error : {
            message: "User Not Found",
          error:  user?.error || user.response,  
          }
        }; 
      }
 

      const isValid = await compare( 
        body.password,
        user.response.dataValues.password
        
      );
      console.log(isValid, "Password comparison result");
      if(!isValid){
        return {
            response : {
              message: "Invalid Credentials",
            response : false,
            }
         
        }
      }

      return {
        response: {
            message: "Logged In successfully",
            
        }
      }
    } catch (error) {
      console.error("Error during login process:", error);
      return {
        error: error,
      };
    }
  },
};

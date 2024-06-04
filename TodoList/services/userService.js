const {hash} = require("bcryptjs")
const {v4 : uuid} = require ("uuid")
const userModel = require("../models/userModel")

module.exports = {
    createUser : async (body) => {
        try {
        // body.password = await hash(body.password, 10)
        delete body.confirmPassword;
        const isUser = await userModel.getUser(false,body.userName);
        if (isUser.error || isUser.response ) {
            return{
                error: "user already existed"
            }
            
        }
        body.password = await hash(body.password , 10);
        body.userId = uuid();
        
        const user =await userModel.createUser(body);
       
        if (user.error) {
            return{
                error: user.error
            }
            
        }
        
        delete user.response.dataValues.password;

            return {
            response: user.response.dataValues,
            }
        } catch (error) {
            return{
                error : error
            }
            
        }
    },
    getAllUsers: async () => {
        try {
          const users = await userModel.getAllUsers();
          if (users.error) {
            return {
              error: users.error,
            };
          }
          return {
             response : users.response
          }
        } catch (error) {
          return {
            message: error,
          };
        }
      },
      deleteUser : async(userId) =>{
        try {
          const deleteUser = await userModel.deleteUser(userId);
          if(deleteUser.error || !deleteUser.response){
            
            return {
              
              error : {
                message : " unable to delete User!",
                error : deleteUser?.error || deleteUser.response
              }
              
            };
          }
          
          return {
            response : {
              message : "user Deleted!",
              response : deleteUser.response
            }
          }
        } catch (error) {
          return {
            error : error,
          }
          
        }
        
      },
    updateUser : async(body) =>{
        try {
          const updateUser = await userModel.updateUser({...body});
          if(updateUser.error || !updateUser.response[0]){
            
            return {
              
              error : {
                message : " unable to update User!",
                error : updateUser?.error || updateUser.response
              }
              
            };
          }
          
          return {
            response : {
              message : "user updated!",
              response : updateUser.response
            }
          }
        } catch (error) {
          return {
            error : error,
          }
          
        }
        
      }
      
}
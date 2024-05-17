const {hash} = require("bcryptjs")
const userModel = require("../models/userModel")
module.exports = {
    createUser : async (body) => {
        try {
        body.password = await hash(body.password, 10)
        delete body.confirmPassword;

        const user =await userModel.createUser(body)
        if (user.error) {
            return{
                error: user.error
            }
            
        }delete user.response.password;

            return {
            response: user.response,
            }
        } catch (error) {
            return{
                error : error
            }
            
        }
    }
}
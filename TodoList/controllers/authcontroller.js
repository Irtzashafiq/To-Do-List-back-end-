const joi = require("joi");

const loginSchema = joi.object().keys({
    username : joi.string().email().required(),
    password : joi.string().min(6).max(12).required()
})

const newUserSchema = joi.object().keys({
    firstName : joi.string().max(10),
    lastName : joi.string().max(10),
    email : joi.string().email().required(),
    password : joi.string().min(8).max(18).required(),
})

const UpdateUserSchema = joi.object().keys({
    email : joi.string().email(),
    password : joi.string().min(8).max(15)
})

const deleteUserSchema = joi.object().keys({
    email : joi.string().email(),
    password: joi.string().min(8).max(15),
})

module.exports = {
    getUser: async(req, res) => {
        try{
            const validate =await loginSchema.validateAsync(req.query);
       return res.send({
            message : "Get Users",
            data : validate
        });
    }
    catch (error){
        return res.send({
            message : error.message
        })
    }
    },

    createUser: async (req, res) => {
            try{
        const validate = await newUserSchema.validateAsync(req.body)
       return res.send({
            message : "Create user",
            data : validate
        });
    }catch (error){
        return res.send({
            message : error.message
        })
    }
    },

    updateUser: async (req,res)=>{
        try {
            const validate = await UpdateUserSchema.validateAsync(req.body)
            return res.send({
                message : "updated user successfully",
                data : validate
            })
        } catch (error) {
            res.send ({
                message: error.message
            })
            
        }
        },

    deleteUser : async (req,res) =>{
        try {
            const validate = await deleteUserSchema.validateAsync(req.query)
            return res.send({
                message: "Deleted User successfully",
                data : validate
            })
        } catch (error) {
            res.send({
                message : error.message
            })
        }
    }
}

 
const joi = require("joi")
const userService = require("../services/userService")

const getTaskSchema = joi.object().keys({
    taskName : joi.string().min(1).max(33).required(),
    taskInfo : joi.string().max(2000)
})
const createTaskSchema = joi.object().keys({
    taskName : joi.string().min(1).max(33).required(),
    taskInfo : joi.string().max(2000)
})

module.exports = {
    getTask : async (req,res)=>{
        try {
            const validate = await getTaskSchema.validateAsync(req.query);
            return res.send({
                message : "Get Tasks",
                data : validate
            })
        } catch (error) {
            return res.send({
                error: error.message
            })
        }
    },

createTask : async (req,res)=>{
    try {
        const validate = await createTaskSchema.validateAsync(req.body);
        const task = await userService.createTask(validate)
        if (task.error) {
            return res.send({
                error: {
                    message : "Unable to create task",
                    error: task.error
                }
            })
        }
        return res.send({
            message : "creating a new task",
            response : task.response
        })
    } catch (error) {
        return res.send({
            error: error.message
        })
    }
}
};

const route = require("express").Router();
const {getUser,createUser,updateUser,deleteUser,getAllUsers} = require("../controllers/usercontroller")
const { middlewear } = require("../middlewear")

route.get("/getUser" ,getUser )
route.post("/createUser", createUser)
route.put("/updateUser",updateUser)
route.delete("/delete", deleteUser)
route.get("/getAll", middlewear, getAllUsers)

module.exports = route;
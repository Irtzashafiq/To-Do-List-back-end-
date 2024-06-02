const route = require("express").Router();



const { login }= require("../controllers/authController")

route.post("/login", login)


module.exports = route;
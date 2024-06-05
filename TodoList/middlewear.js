require("dotenv").config();
const { response } = require("express");
const { verify } = require("jsonwebtoken")
module.exports = {
  middlewear: async (req, res , next) => {
    try {
      console.log(req.cookies);
      const token = req.cookies.auth;
      if(token === "undefined"){
        return res.send({
            response : "unauthorized user" 
        });
      }
         verify(token , process.env.SECRET , (error, data)=>{
        if(error){
            res.send({
                response : "forbidden access"
            })
        }
        req.userData = data;
        next();
      })
    } catch (error) {
      return res.send({
        message : error.message
      });
    }
  },
};

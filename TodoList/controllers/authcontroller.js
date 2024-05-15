module.exports = {
    getUser: (req, res) => {

       return res.send({
            message : "Get Users",
            data : req.query
        });
    },

    createUser: (req, res) => {

       return res.send({
            message : "Create user",
            data : req.query
        });
    }
}

 
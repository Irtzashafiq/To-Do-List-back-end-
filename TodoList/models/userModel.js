module.exports = {
    createUser : async (body) => {
        try {
        //create db record
        const user = body;
            return {

            response: user
            }
        } catch (error) {
            return{
                error : error
            }
            
        }
    }
}
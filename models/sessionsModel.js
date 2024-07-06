// const { models } = require("../models/index");

// module.exports = {
//   createSessions: async (body) => {
//     try {
//       console.log(body,"check 1")

//       const session = await models.sessions.create({...body});
// console.log(session, "session")
//       return {
//         response: session,
//       };
//     } catch (error) {
//       return {
//         error: error.message,
//       };
//     }
//   },
//   getSession: async (sessionId) => {
//     try {
//       const session = await models.sessions.findOne({
//         where: { sessionId: sessionId },
//         // attributes : {
//         //   include : {
//         //     models : models.users,
//         //   attributes :  ["userName", "userId"]
            
//         //   }
//         // }
//       });
//       return {
//         response: session,
//       };
//     } catch (error) {
//       return {
//         error: error,
//       };
//     }
//   },
//   deleteSession: async (sessionId) => {
//     try {
//       const deleteSession = await models.sessions.destroy({
//         where: { sessionId : sessionId },
//       });
      

//       return {
//         message: " Session deleted",
//         response: deleteSession,
//       };
      
//     } catch (error) {
//       return {
//         message: error.message,
//       };
//     }
//   },
// };

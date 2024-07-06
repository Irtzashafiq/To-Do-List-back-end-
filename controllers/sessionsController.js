// const joi = require("joi");
// const sessionService = require("../services/sessionsService");

// const getSessionSchema = joi.object().keys({
//   sessionId: joi.string().max(1000).required(),
//   token: joi.string().max(2000),
//   userId: joi.string(),
// });
// const createSessionSchema = joi.object().keys({
//   userId: joi.string().length(36).required(),
// });
// const deleteSessionSchema = joi.object().keys({
//   sessionId: joi.array().single().required(),
// });

// module.exports = {
//   getSession: async (req, res) => {
//     try {
//       const validate = await getSessionSchema.validateAsync(req.query);
//       return res.send({
//         message: "Get Session",
//         data: validate,
//       });
//     } catch (error) {
//       return res.send({
//         error: error.message,
//       });
//     }
//   },

//   createSession: async (req, res) => {
//     try {
//       const validate = await createSessionSchema.validateAsync(req.body);
//       const session = await sessionService.createSession(validate);
//       console.log(req.body, "======session conroller=======")

//       if (session.error) {
//         return res.send({
//           error: {
//             message: "Unable to create Session",
//             error: session.error,
//           },
//         });
//       }
//       console.log(session, "+++++")
//       return res.send({
//         message: "creating a new Session",
//         response: session.response,
//       });

//     } catch (error) {
//       return res.send({
//         error: error.message,
//       });
//     }
//   },

//   deleteSession: async (req, res) => {
//     try {
//       //try catch is used so that the server should not crash!
//       const validate = await deleteSessionSchema.validateAsync(req.query);
//       const deleteSession = await sessionService.deleteSession(
//         validate.sessionId
//       );
//       if (deleteSession.error) {
//         return res.send(deleteSession.error);
//       }
//       return res.send({
//         response: deleteSession.response,
//       });
//     } catch (error) {
//       return res.send({ message: error.message });
//     }
//   },
// };

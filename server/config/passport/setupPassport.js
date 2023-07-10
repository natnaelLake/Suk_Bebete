// // require.config("dotenv");
// import passport from "passport";
// // import Admin from "../../models/users/Admin.js"
// import Admin from "../../models/users/Admin/index.js";
// import JwtStrategy  from "passport-jwt";
// import { ExtractJwt } from "passport-jwt";
// const opts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: 'process.env.JWT_SECRET_KEY',
// };

// const passportConnection = passport.use(
//   new JwtStrategy(opts, async (payload, done) => {
//     const user = await Admin.findOne({ _id: payload._id });
//     try {
//       const user = await Admin.findOne({ _id: payload._id });

//       if (!user) {
//         const NotFound = new APIError(
//           "User not found",
//           httpStatus.NOT_FOUND,
//           true
//         );

//         return done(NotFound, false);
//       }

//       return done(false, user);
//     } catch (error) {
//       return done(error, null);
//     }
//   })
// );

// export default passportConnection;

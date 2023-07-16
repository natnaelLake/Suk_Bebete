import express from "express";
import {
  createAdminController,
  getAdminController,
} from "../controllers/admin.js";
import passport from "passport";
import strategy from "../config/passport/setupPassport.js";
import localStrategy from "../config/passport/localStrategy.js";
import { createAdminValidator } from "../validators/admin.validator.js";
import parseValidations from "../validators/errors.parser.js";
passport.use("jwt", strategy);
passport.use("local", localStrategy);
const adminRouter = express.Router();

adminRouter.post(
  "/createAdmin",
  createAdminValidator(),
  parseValidations,
  createAdminController
);
adminRouter.get(
  "/getAdmin",
  getAdminController
);

export default adminRouter;

import express from "express";
import { createUserValidator } from "../validators/user-validator.js";
import parseValidations from "../validators/errors.parser.js";

const routePage = express.Router();

import {
  createUserController,
  getUserController,
} from "../controllers/user.js";

routePage.post(
  "/createUser",
  createUserValidator(),
  parseValidations,
  createUserController
);
routePage.get("/getUser", getUserController);

export default routePage;

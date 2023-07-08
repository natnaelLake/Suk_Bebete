import mongoose from "mongoose";
import userDB from "./schema.js";
import * as staticFunctions from './statics.js'
import { modelNames } from "../../utils/constants.js";

userDB.static(staticFunctions)

const Users = mongoose.model(modelNames.users,userDB)


export default Users;
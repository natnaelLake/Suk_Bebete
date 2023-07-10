import mongoose from "mongoose";
import adminDB from "./schema.js";
import * as staticFunctions from './statics.js'
import { modelNames } from "../../../utils/constants.js";
adminDB.static(staticFunctions)

const Admin = mongoose.model(modelNames.admin,adminDB)


export default Admin;
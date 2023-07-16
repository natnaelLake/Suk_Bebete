import mongoose from "mongoose";
import adminDB from "./schema.js";
import * as staticFunctions from './statics.js'
import * as methodsFunciton from './methods.js'
import { modelNames } from "../../../utils/constants.js";
adminDB.static(staticFunctions)
adminDB.method(methodsFunciton);

const Admin = mongoose.model(modelNames.admin,adminDB)

export default Admin;
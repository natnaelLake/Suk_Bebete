import productDB from "./schema.js";
import mongoose from 'mongoose'
import * as staticFunctions from './statics.js'
import { modelNames } from "../../utils/constants.js";


productDB.static(staticFunctions)

const Products = mongoose.model(modelNames.products,productDB)

export default Products
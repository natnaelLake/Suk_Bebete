import { modelNames } from "../../utils/constants.js";
import orderDB from "./schema.js";
import mongoose from "mongoose";

import * as staticFunctions from './statics.js';

orderDB.static(staticFunctions);

const Order = mongoose.model(modelNames.orders,orderDB)

export default Order;
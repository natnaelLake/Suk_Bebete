import { modelNames } from "../../../utils/constants.js";
import Admin from "./index.js";
import { authenticateAdmin } from "./methods.js";

export async function createAdmin(userInfo) {
  const { email, password } = userInfo;
  const createdAdmin = new Admin({
    email,
    password,
  });
  const token = authenticateAdmin(createdAdmin._id);
  createdAdmin.token = token;
  createdAdmin.save();

  console.log(createdAdmin, token);
  return createdAdmin;
}

export async function getAdmin(adminInfo) {
  const { email, password } = adminInfo;
  const regesteredAdmin = this.model(modelNames.admin)
    .find()
  return regesteredAdmin;
}

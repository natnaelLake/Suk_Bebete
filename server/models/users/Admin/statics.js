import { modelNames } from "../../../utils/constants.js";

export async function createAdmin(userInfo) {
  const { email,password } = userInfo;

  const createdAdmin = this.model(modelNames.admin).create({
    email,
    password
  });
  return createdAdmin
}

export async function getAdmin() {
  const regesteredAdmin = this.model(modelNames.admin).find().sort({updatedAt:-1})
  return regesteredAdmin
}

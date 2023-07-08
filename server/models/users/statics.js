import { modelNames } from "../../utils/constants.js";

export async function createUser(userInfo) {
  const { phone, amount, address, name, email } = userInfo;

  const createdUser = this.model(modelNames.users).create({
    phone,
    amount,
    address,
    name,
    email,
  });
  return createdUser
}

export async function getUser() {
  const regesteredUsers = this.model(modelNames.users).find().sort({updatedAt:-1})
  return regesteredUsers
}

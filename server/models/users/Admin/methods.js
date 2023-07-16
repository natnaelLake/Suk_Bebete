import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const generateJwtToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY);
  return token;
};
export const authenticateAdmin = (id) => {
  const createdToken = generateJwtToken(id);
  return createdToken;
};

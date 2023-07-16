import Users from "../models/users/index.js";

export const createUserController = async (req, res) => {
  const { phone, address, name, email } = req.body;
  try {
      const userInfo = {
        phone,
        address,
        name,
        email,
      };
      const newUser = await Users.createUser(userInfo);
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
};

export const getUserController = async (req, res) => {
  try {
      const newUser = await Users.getUser();
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
};

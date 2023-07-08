import Users from "../models/users/index.js";

export const createUserController = async (req, res) => {
  const { phone, amount, address, name, email } = req.body;
  try {
      const userInfo = {
        phone,
        amount,
        address,
        name,
        email,
      };
      const newUser = await Users.createUser(userInfo);
    console.log("welcome to post", newUser);
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const getUserController = async (req, res) => {
  try {
      const newUser = await Users.getUser();
    ;
    console.log("welcome to get", newUser);
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

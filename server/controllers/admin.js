import Admin from "../models/users/Admin/index.js";

export const createAdminController = async (req, res,next) => {
  const { email, password } = req.body;
  try {
    const adminInfo = {
      email,
      password,
    };
    const newAdmin = await Admin.createAdmin(adminInfo);
    res.json(newAdmin);
  } catch (error) {
    next(error)
  }
};

export const getAdminController = async (req, res,next) => {
  const { email, password } = req.body;
  try {
    const adminInfo = {email,password}
    const admins = await Admin.getAdmin(adminInfo);
    res.json(admins);
  } catch (error) {
    next(error)
  }
};

import Admin from "../models/users/Admin/index.js";
// import Users from "../models/users/index.js";
// import Admin from "../models/users/Admin/index.js";


export const createAdminController = async (req, res) => {
  const {email,password } = req.body;
  try {
      const adminInfo = {
        email,
        password
      };
      const newAdmin = await Admin.createAdmin(adminInfo);
    console.log("welcome to post", newAdmin);
    res.json(newAdmin);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const getAdminController = async (req, res) => {
  try {
      const admins = await Admin.getAdmin();
    ;
    console.log("welcome to get", admins);
    res.json(admins);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

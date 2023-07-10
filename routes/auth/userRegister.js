import express from "express";
import validateUserInformation from "../../controller/auth/validateUserInformation.js";
import { hashPassword } from "../../controller/auth/securePassword.js";

const userRegisterRouter = express.Router();

userRegisterRouter.get("/", validateUserInformation, (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = hashPassword(password);
  console.log(hashedPassword);

  return res.json({ email, password });
});

export default userRegisterRouter;

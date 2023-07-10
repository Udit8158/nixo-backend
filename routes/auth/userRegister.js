import express from "express";
import validateUserInformation from "../../controller/auth/validateUserInformation.js";
import { hashPassword } from "../../controller/auth/securePassword.js";
import User from "../../models/User.js";

const userRegisterRouter = express.Router();

userRegisterRouter.get("/", validateUserInformation, async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user with email exist in the db
    const existedUser = await User.findOne({ email });

    if (!existedUser) {
      const hashedPassword = hashPassword(password);

      // db adding
      const newUser = new User({
        email,
        password: hashedPassword,
        role: "user", // default role is user
      });

      await newUser.save();

      return res.json(newUser);
    } else {
      return res.status(409).json({ error: "User already registered!" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default userRegisterRouter;

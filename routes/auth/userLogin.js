import express from "express";
import validateUserInformation from "../../controller/auth/validateUserInformation.js";
import { checkPassword } from "../../controller/auth/securePassword.js";
import User from "../../models/User.js";
import { createToken, verifyToken } from "../../controller/auth/jwt.js";

const userLoginrRouter = express.Router();

userLoginrRouter.get("/", validateUserInformation, async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user with email exist in the db
    const existedUser = await User.findOne({ email });

    if (!existedUser) {
      return res.status(404).json({ error: "User not found!" });
    } else {
      // Matching user password
      const existedUserPassword = existedUser.password;
      const isPasswordMatched = checkPassword(password, existedUserPassword);

      // Create jwt token from the user data
      const token = createToken({ email, role: existedUser.role });

      if (isPasswordMatched) return res.status(200).json({ token });
      else return res.status(401).json("Unauthorized");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default userLoginrRouter;

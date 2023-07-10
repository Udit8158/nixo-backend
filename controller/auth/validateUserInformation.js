import { body, validationResult } from "express-validator";

// Validation middleware for register route
const validateUserInformation = [
  // Validate 'email' field
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),

  // Validate 'password' field
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6, max: 12 })
    .withMessage(
      "Password must be at least 6 characters long and at max 12 characters long"
    ),
  // body("role").notEmpty().isIn(["admin", "user"]).withMessage("Invalid Role"),

  // Handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default validateUserInformation;

import express from "express";
import userRegisterRouter from "./routes/auth/userRegister.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // using env variables

const app = express();
const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;

// Using default middlewares
app.use(bodyParser.json());

// Using Routes
app.use("/api/register", userRegisterRouter);
// Connect to DB
mongoose.connect(dbUri);

// Listen on Port
app.listen(port, () => console.log(`Server listening on ${port}`));

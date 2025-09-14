import express from "express";
import "dotenv/config";

import authRoutes from './routes/authRoutes.js'
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/api/auth", authRoutes)

console.log({ PORT });

app.listen(3001, () => {

  console.log(`Server is running on port ${PORT}`);
  connectDB();
  
});
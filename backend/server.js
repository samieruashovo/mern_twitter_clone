import express from "express";
import dotenv from "dotenv";

import connectMongoDB from "./db/connectMongoDB.js";
// import authRoutes from "./routes/auth.routes.js";
const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
// app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log("Server is running on http://localhost:", PORT);
  connectMongoDB();
});

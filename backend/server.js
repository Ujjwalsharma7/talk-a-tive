import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const PORTT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json()); // To parse the body of the request

app.use("/api/auth", authRoutes);

app.listen(PORTT, () => {
  connectToMongoDB();
  console.log("Server Running on port 5000");
});

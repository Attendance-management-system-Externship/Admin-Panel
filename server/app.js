import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/connectDB.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

connectDB();

//routes
app.use("/api/admin", adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(`NodeJS Server listening on port ${process.env.PORT}`);
});

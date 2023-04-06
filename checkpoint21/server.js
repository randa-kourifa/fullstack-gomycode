import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
dotenv.config();
const app = express();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  });
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/ping", (req, res) => {
  res.send("pong");
});
app.listen(process.env.PORT, () => {
  console.log("Server is running on port" + process.env.PORT);
});

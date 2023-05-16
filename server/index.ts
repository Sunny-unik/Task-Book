import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/dbConnection";
import userRouter from "./src/routes";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true
  })
);
app.use(express.json());

connectDb();

app.use("/user", userRouter);

app.listen(port, () => console.log(`app is live on http://localhost:${port} pid: ${process.pid}`));

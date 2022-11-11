import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import createNew from "./routes/createNew.js";
import getInfo from "./routes/getInfo.js";
import update from "./routes/update.js";
import login from "./controllers/login.js";

const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("LMS backend server");
});

app.post("/login", login);

app.use("/create", createNew);
app.use("/get", getInfo);
app.use("/update", update);
app.use("/delete", getInfo);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((e) => console.log(e));

import express from "express";
import * as update from "../controllers/update.js";

const updateRouter = express.Router();

updateRouter.post("/marks/:id", update.updateMarks);

export default updateRouter;

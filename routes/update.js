import express from "express";
import * as update from "../controllers/update.js";

const updateRouter = express.Router();

updateRouter.post("/marks/:id", update.updateMarks);
updateRouter.post("/resource/:id", update.resource);
updateRouter.post("/timetable", update.uptt);

export default updateRouter;

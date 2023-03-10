import express from "express";
import * as get from "../controllers/get.js";

const getInfo = express.Router();

getInfo.get("/student/:id", get.studentInfo);
getInfo.get("/faculty/:id", get.facultyInfo);
getInfo.get("/batch/:id", get.batchInfo);
getInfo.get("/resources/:subjectId", get.resources);
getInfo.get("/testimonial", get.testimonial);
getInfo.get("/marks", get.getMarks);
getInfo.get("/timetable", get.getTimetable);

export default getInfo;

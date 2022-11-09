import express from "express";
import * as get from "../controllers/get.js";

const getInfo = express.Router();

getInfo.get("/student/:id", get.studentInfo);
getInfo.get("/faculty/:id", get.facultyInfo);
getInfo.get("/batch/:id", get.batchInfo);
getInfo.get("/subjectList/:id", get.subjectList);
getInfo.get("/student-marks/:id", get.studentMarks);
getInfo.get("/max-marks/:subjectId", get.maxMarks);
getInfo.get("/resources/:subjectId", get.resources);
getInfo.get("/testimonial", get.testimonial);

export default getInfo;

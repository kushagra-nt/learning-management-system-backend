import express from "express";
import * as createNew from "../controllers/createNew.js";

const createNewRouter = express.Router();

createNewRouter.post("/admin", createNew.createNewAdmin);
createNewRouter.post("/student", createNew.createNewStudent);
createNewRouter.post("/faculty", createNew.createNewFaculty);
createNewRouter.post("/batch", createNew.createNewBatch);
createNewRouter.post("/subject", createNew.createNewSubject);
createNewRouter.post("/testimonial", createNew.createNewTestimonial);
createNewRouter.post("/marks", createNew.createNewMarks);
createNewRouter.post("/timetable", createNew.creatett);

export default createNewRouter;

import mongoose from "mongoose";

const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  studentsMarks: {
    type: [],
    default: [],
  },
  resourceLink: String,
  facultyId: String,
});

const subjects = mongoose.model("subjects", subjectSchema);

export default subjects;

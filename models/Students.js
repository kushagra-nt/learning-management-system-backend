import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    reuqired: true,
  },
  phoneNo: String,
  subjectMarks: {},
  batch: String,
});

const students = mongoose.model("Students", studentSchema);

export default students;

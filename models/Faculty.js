import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fid: {
    type: String,
    required: true,
  },
  phoneNo: String,
  password: {
    type: String,
    required: true,
  },
  exprerience: Number,
  batches: [],
  subject: String,
});

const faculties = mongoose.model("Faculties", facultySchema);

export default faculties;

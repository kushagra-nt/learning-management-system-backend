import mongoose from "mongoose";

const batchSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  students: {
    type: [],
    default: [],
  },
  subjects: {
    type: [],
    default: [],
  },
  faculties: {
    type: [],
    default: [],
  },
  timing: String,
});

const batches = mongoose.model("batches", batchSchema);

export default batches;

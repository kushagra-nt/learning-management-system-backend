import mongoose from "mongoose";

const marksSchema = mongoose.Schema({
  marks: {
    type: [],
    default: [],
  },
});

const marks = mongoose.model("marks", marksSchema);

export default marks;

import mongoose from "mongoose";

const ttSchema = mongoose.Schema({
  timetable: {
    type: [],
    default: [],
  },
});

const timetables = mongoose.model("timetable", ttSchema);

export default timetables;

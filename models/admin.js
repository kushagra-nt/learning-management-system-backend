import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const admins = mongoose.model("admins", adminSchema);

export default admins;

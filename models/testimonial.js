import mongoose from "mongoose";

const testimonialSchema = mongoose.Schema({
  unique_no: String,
  name: String,
  rating_star: Number,
  date: String,
  review: String,
});

const testimonial = mongoose.model("testimonial", testimonialSchema);

export default testimonial;

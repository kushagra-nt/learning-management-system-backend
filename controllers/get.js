import students from "../models/Subjects.js";
import faculties from "../models/Faculty.js";
import subjects from "../models/Subjects.js";
import batches from "../models/Batch.js";
import testimonials from "../models/testimonial.js";
import marks from "../models/marks.js";

export const studentInfo = async (req, res) => {
  const studentId = req.params.id;
  const student = await students.findOne({ rollNo: studentId });
  res.send(student);
};

export const facultyInfo = async (req, res) => {
  const facultyId = req.params.id;
  const faculty = await faculties.findOne({ fid: facultyId });
  res.send(faculty);
};

export const batchInfo = async (req, res) => {
  const batchId = req.params.id;
  const faculty = await batches.findOne({ name: batchId });
  res.send(faculty);
};

export const resources = async (req, res) => {
  const subjectId = req.params.id;
  const subject = await subjects.findById(subjectId);

  res.send(subject.resourceLinks);
};

export const subjectList = async (req, res) => {
  const batchId = req.params.id;
  const batch = await batches.findById(batchId);
  res.send(batch.subjects);
};

export const testimonial = async (req, res) => {
  const testimonialtr = await testimonials.find();

  res.send(testimonialtr);
};

export const getMarks = async (req, res) => {
  const ret = await marks.findOne();
  res.send(ret.marks);
};

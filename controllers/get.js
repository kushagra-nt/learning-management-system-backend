import students from "../models/Subjects.js";
import faculties from "../models/Faculty.js";
import admins from "../models/admin.js";
import subjects from "../models/Subjects.js";
import batches from "../models/Batch.js";
import testimonials from "../models/testimonial.js";

export const studentInfo = async (req, res) => {
  const studentId = req.params.id;
  const student = await students.findById(studentId);
  res.send(student);
};

export const facultyInfo = async (req, res) => {
  const facultyId = req.params.id;
  const faculty = await faculties.findById(facultyId);
  res.send(faculty);
};

export const batchInfo = async (req, res) => {
  const batchId = req.params.id;
  const faculty = await batches.findOne({ name: batchId });
  res.send(faculty);
};

export const studentMarks = async (req, res) => {
  const studentId = req.params.id;
  const student = await students.findById(studentId);
  res.send(student.subjectMarks);
};

export const maxMarks = async (req, res) => {
  res.send();
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

import students from "../models/Students.js";
import faculties from "../models/Faculty.js";
import admins from "../models/admin.js";
import subjects from "../models/Subjects.js";
import batchesModel from "../models/Batch.js";
import testimonial from "../models/testimonial.js";
import marks from "../models/marks.js";

export const createNewStudent = async (req, res) => {
  const { name, rollNo, password, phoneNo, batch } = req.body;

  const newStudent = await students.create({
    name,
    rollNo,
    password,
    phoneNo,
    batch,
  });

  const batchOfStudent = await batchesModel.findOne({ name: batch });
  batchOfStudent.students.push(newStudent._id);
  await batchOfStudent.save();

  res.send(newStudent);
};

export const createNewFaculty = async (req, res) => {
  const { name, fid, phoneNo, password, experience, batches, subject } = req.body;

  const newFaculty = await faculties.create({
    name,
    fid,
    password,
    phoneNo,
    experience,
    batches,
    subject,
  });

  batches.forEach(async (batch) => {
    const batchToAssign = await batchesModel.findOne({ name: batch });
    batchToAssign.faculties.push(fid);

    await batchToAssign.save();
  });

  res.send(newFaculty);
};

export const createNewAdmin = async (req, res) => {
  const { name, password } = req.body;

  const newAdmin = await admins.create({
    name,
    password,
  });

  res.send(newAdmin);
};

export const createNewSubject = async (req, res) => {
  const { name, batch, facultyId } = req.body;

  const newSubject = await subjects.create({
    name,
    facultyId,
  });

  const batchToAssign = await batchesModel.findOne({ name: batch });
  batchToAssign.subjects.push({ name: name, id: newSubject._id });

  await batchToAssign.save();

  res.send(newSubject);
};

export const createNewBatch = async (req, res) => {
  const { name } = req.body;

  const newBatch = await batchesModel.create({
    name,
  });

  res.send(newBatch);
};
export const createNewMarks = async (req, res) => {
  const newMarks = await marks.create({});

  res.send(newMarks);
};

export const createNewTestimonial = async (req, res) => {
  const { unique_no, name, rating_star, date, review } = req.body;

  const newTes = await testimonial.create({
    unique_no,
    name,
    rating_star,
    date,
    review,
  });

  res.send(newTes);
};

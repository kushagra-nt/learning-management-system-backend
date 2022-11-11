import students from "../models/Students.js";
import marks from "../models/marks.js";
import subjects from "../models/Subjects.js";
import timetables from "../models/timetable.js";

export const updateMarks = async (req, res) => {
  const studentId = req.params.id;
  const student = await students.findOne({ rollNo: studentId });

  const { phyMarks, chemMarks, mathMarks, bioMarks } = req.body;

  const marksTable = await marks.findOne();

  marksTable.marks.push({ name: student.name, phyMarks, chemMarks, mathMarks, bioMarks, batch: student.batch });

  await marksTable.save();

  res.send({ result: "done" });
};

export const resource = async (req, res) => {
  const subjectId = req.params.id;
  const { link } = req.body;

  const subject = await subjects.findById(subjectId);
  subject.resourceLink = link;

  await subject.save();

  res.send({ result: "done" });
};

export const uptt = async (req, res) => {
  const { day, phy, maths, bio, chem } = req.body;

  const timetable = await timetables.findOne();

  timetable.timetable.push({ day, phy, maths, bio, chem });
  await timetable.save();

  res.send({ result: "done" });
};

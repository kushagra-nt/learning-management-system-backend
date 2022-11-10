import students from "../models/Students.js";
import marks from "../models/marks.js";

export const updateMarks = async (req, res) => {
  const studentId = req.params.id;
  const student = await students.findOne({ rollNo: studentId });

  const { phyMarks, chemMarks, mathMarks, bioMarks } = req.body;

  const marksTable = await marks.findOne();

  marksTable.marks.push({ name: student.name, phyMarks, chemMarks, mathMarks, bioMarks, batch: student.batch });

  await marksTable.save();

  res.send({ result: "done" });
};

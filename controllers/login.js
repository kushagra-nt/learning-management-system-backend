import students from "../models/Students.js";
import faculties from "../models/Faculty.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  if (email.charAt(0) !== "E") {
    const student = await students.findOne({ rollNo: email });
    if (student == null) {
      res.send({ valid: false });
      return;
    } else {
      if (student.password === password) {
        res.send({ valid: true });
        return;
      } else {
        res.send({ valid: false });
        return;
      }
    }
  } else {
    const faculty = await faculties.findOne({ fid: email });
    if (faculty == null) {
      res.send({ valid: false });
      return;
    } else {
      if (faculty.password === password) {
        res.send({ valid: true });
        return;
      } else res.send({ valid: false });
      return;
    }
  }
  res.send({ valid: false });
};
export default login;

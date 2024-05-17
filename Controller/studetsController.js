const tryCatchHandler = require("../Middleware/tryCatchHandler");
const Studentmodel = require("../Model/studentModel");

// AddStudentData---------------------------------------
const addStudentData = tryCatchHandler(async (req, res) => {
  const { name, dobDay, dobMonth, dobYear, university, subjects, rating } =
    req.body;
  const dob = new Date(dobYear, dobMonth - 1, dobDay);
  const student = new Studentmodel({ name, dob, university, subjects, rating });

  await student.save();
  res.status(201).json({
    message: "Sutudent added successfully",
    student: student,
  });
});

// GetStudetsdata-------------
const getStudetsdata = tryCatchHandler(async (req, res) => {
  const studets = await Studentmodel.find();

  res.status(200).json(studets);
});

module.exports = { addStudentData, getStudetsdata };

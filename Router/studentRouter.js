const express = require("express");
const router = express();
const studetsController = require("../Controller/studetsController");

router.post("/add-student", studetsController.addStudentData);
router.get("/get-students", studetsController.getStudetsdata);

module.exports = router;

const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

router.post("/add", studentController.addStudent);

router.get("/all", studentController.getStudents);

router.put("/update/:id", studentController.updateStudent);

router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
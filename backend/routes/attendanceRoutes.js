const express = require("express");
const router = express.Router();

const attendanceController = require("../controllers/attendanceController");

router.post("/add",attendanceController.markAttendance);

router.get("/all",attendanceController.getAttendance);

module.exports = router;
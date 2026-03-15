const express = require("express");
const router = express.Router();

const enrollmentController = require("../controllers/enrollmentController");

router.post("/add",enrollmentController.addEnrollment);

router.get("/all",enrollmentController.getEnrollments);

module.exports = router;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const studentRoutes = require("./routes/studentRoutes");

app.use("/students", studentRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const courseRoutes = require("./routes/courseRoutes");

app.use("/courses",courseRoutes);
const attendanceRoutes = require("./routes/attendanceRoutes");

app.use("/attendance",attendanceRoutes);
const db = require("../config/db");

exports.markAttendance = (req,res)=>{

const {student_id,course_id,date,status} = req.body;

const sql="INSERT INTO attendance(student_id,course_id,date,status) VALUES(?,?,?,?)";

db.query(sql,[student_id,course_id,date,status],(err,result)=>{

if(err){
res.send(err);
}else{
res.send("Attendance Marked");
}

});

};

exports.getAttendance = (req,res)=>{

db.query("SELECT * FROM attendance",(err,result)=>{

if(err){
res.send(err);
}else{
res.json(result);
}

});

};
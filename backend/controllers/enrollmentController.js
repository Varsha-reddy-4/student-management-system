const db = require("../config/db");

exports.addEnrollment = (req,res)=>{

const {student_id,course_id} = req.body;

const sql="INSERT INTO enrollments(student_id,course_id) VALUES(?,?)";

db.query(sql,[student_id,course_id],(err,result)=>{

if(err){
res.send(err);
}else{
res.send("Enrollment Added");
}

});

};

exports.getEnrollments = (req,res)=>{

const sql=`
SELECT enrollment_id,students.name,courses.course_name
FROM enrollments
JOIN students ON enrollments.student_id=students.student_id
JOIN courses ON enrollments.course_id=courses.course_id
`;

db.query(sql,(err,result)=>{

if(err){
res.send(err);
}else{
res.json(result);
}

});

};
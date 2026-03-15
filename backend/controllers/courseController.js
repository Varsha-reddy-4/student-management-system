const db = require("../config/db");

exports.addCourse = (req,res)=>{

const {course_name,instructor} = req.body;

const sql="INSERT INTO courses(course_name,instructor) VALUES(?,?)";

db.query(sql,[course_name,instructor],(err,result)=>{

if(err){
res.send(err);
}else{
res.send("Course Added");
}

});

};

exports.getCourses = (req,res)=>{

db.query("SELECT * FROM courses",(err,result)=>{

if(err){
res.send(err);
}else{
res.json(result);
}

});

};

exports.deleteCourse = (req,res)=>{

const id=req.params.id;

db.query("DELETE FROM courses WHERE course_id=?",[id],(err,result)=>{

if(err){
res.send(err);
}else{
res.send("Course Deleted");
}

});

};
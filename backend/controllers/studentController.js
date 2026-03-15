const db = require("../config/db");

exports.addStudent = (req,res) => {

    const {name,email,phone,department} = req.body;

    const sql = "INSERT INTO students(name,email,phone,department) VALUES(?,?,?,?)";

    db.query(sql,[name,email,phone,department],(err,result)=>{

        if(err){
            res.send(err);
        }else{
            res.send("Student Added");
        }

    });
};

exports.getStudents = (req,res)=>{

    const sql = "SELECT * FROM students";

    db.query(sql,(err,result)=>{

        if(err){
            res.send(err);
        }else{
            res.json(result);
        }

    });

};
exports.updateStudent = (req,res)=>{

    const id = req.params.id;
    const {name,email,phone,department} = req.body;

    const sql =
    "UPDATE students SET name=?, email=?, phone=?, department=? WHERE student_id=?";

    db.query(sql,[name,email,phone,department,id],(err,result)=>{

        if(err){
            res.send(err);
        }else{
            res.send("Student Updated");
        }

    });

};
exports.deleteStudent = (req,res)=>{

    const id = req.params.id;

    const sql = "DELETE FROM students WHERE student_id=?";

    db.query(sql,[id],(err,result)=>{

        if(err){
            res.send(err);
        }else{
            res.send("Student Deleted");
        }

    });

};
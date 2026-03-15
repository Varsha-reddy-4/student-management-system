const form = document.getElementById("attendanceForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const data={

student_id: document.getElementById("student_id").value,
course_id: document.getElementById("course_id").value,
date: document.getElementById("date").value,
status: document.getElementById("status").value

};

fetch("http://localhost:3000/attendance/add",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)

})
.then(res=>res.text())
.then(msg=>{
alert(msg);
loadAttendance();
});

});

function loadAttendance(){

fetch("http://localhost:3000/attendance/all")
.then(res=>res.json())
.then(data=>{

let rows="";

data.forEach(a=>{

rows += `
<tr>
<td>${a.attendance_id}</td>
<td>${a.student_id}</td>
<td>${a.course_id}</td>
<td>${a.date}</td>
<td>${a.status}</td>
</tr>
`;

});

document.getElementById("attendanceTable").innerHTML = rows;

});

}

loadAttendance();
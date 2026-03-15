const form = document.getElementById("enrollForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const data = {

student_id: document.getElementById("student_id").value,
course_id: document.getElementById("course_id").value

};

fetch("http://localhost:3000/enrollments/add",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)

})
.then(res=>res.text())
.then(msg=>{
alert(msg);
loadEnrollments();
});

});

function loadEnrollments(){

fetch("http://localhost:3000/enrollments/all")
.then(res=>res.json())
.then(data=>{

let rows="";

data.forEach(e=>{

rows += `
<tr>
<td>${e.enrollment_id}</td>
<td>${e.name}</td>
<td>${e.course_name}</td>
</tr>
`;

});

document.getElementById("enrollTable").innerHTML = rows;

});

}

loadEnrollments();
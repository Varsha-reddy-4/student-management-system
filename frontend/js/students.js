const form = document.getElementById("studentForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const student = {

name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
department: document.getElementById("department").value

};

fetch("http://localhost:3000/students/add",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(student)

})
.then(res=>res.text())
.then(data=>{
alert(data);
loadStudents();
});

});

function loadStudents(){

fetch("http://localhost:3000/students/all")
.then(res=>res.json())
.then(data=>{

let rows="";

data.forEach(s=>{

rows += `
<tr>
<td>${s.student_id}</td>
<td>${s.name}</td>
<td>${s.email}</td>
<td>${s.phone}</td>
<td>${s.department}</td>

<td>

<button onclick="deleteStudent(${s.student_id})">
Delete
</button>

</td>

</tr>
`;

});

document.getElementById("studentTable").innerHTML=rows;

});

}

function deleteStudent(id){

fetch(`http://localhost:3000/students/delete/${id}`,{

method:"DELETE"

})
.then(res=>res.text())
.then(data=>{
alert(data);
loadStudents();
});

}

loadStudents();
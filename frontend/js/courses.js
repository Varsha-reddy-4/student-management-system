const form = document.getElementById("courseForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const course={

course_name:document.getElementById("course_name").value,
instructor:document.getElementById("instructor").value

};

fetch("http://localhost:3000/courses/add",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(course)

})
.then(res=>res.text())
.then(data=>{
alert(data);
loadCourses();
});

});

function loadCourses(){

fetch("http://localhost:3000/courses/all")
.then(res=>res.json())
.then(data=>{

let rows="";

data.forEach(c=>{

rows+=`
<tr>
<td>${c.course_id}</td>
<td>${c.course_name}</td>
<td>${c.instructor}</td>

<td>

<button onclick="deleteCourse(${c.course_id})">
Delete
</button>

</td>

</tr>
`;

});

document.getElementById("courseTable").innerHTML=rows;

});

}

function deleteCourse(id){

fetch(`http://localhost:3000/courses/delete/${id}`,{

method:"DELETE"

})
.then(res=>res.text())
.then(data=>{
alert(data);
loadCourses();
});

}

loadCourses();
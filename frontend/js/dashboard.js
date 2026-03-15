fetch("http://localhost:3000/students/all")
.then(res=>res.json())
.then(data=>{
document.getElementById("studentCount").innerText = data.length;
});

fetch("http://localhost:3000/courses/all")
.then(res=>res.json())
.then(data=>{
document.getElementById("courseCount").innerText = data.length;
});
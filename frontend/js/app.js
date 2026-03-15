document.getElementById("studentForm")
.addEventListener("submit", function(e){

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
body: JSON.stringify(student)

})
.then(res=>res.text())
.then(data=>{
alert(data);
});

});
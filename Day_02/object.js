let Student ={
    name:"Dikshya Bhatta",
    rollno:41,
    Address:"Kailali",
    position:"Developer"

}
console.log(Student);
console.log(Student.name);
//Updating Data
Student.name = "Alisha";
console.log(Student);
//deleting Data
delete Student.position;
console.log(Student);
//adding additional data or property
Student.Company="cloud Nepal Web";
console.log(Student);
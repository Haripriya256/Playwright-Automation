// console.log("Hi there!");
// console.log("Welcome");
// setTimeout(() => {console.log("Hello")}, 2000);
// setTimeout(add,1000);
// console.log("Goodbye");
// console.log("See you soon");

// function add(){
//     console.log(20+30);
// }

//Object

let studentDetails = {
    name: "Haripriya",
    course: "SDET",
    address: "Chennai",
    skills:["JS","PL","SQL","GIT"],
    data:()=>{
       console.log(this.course);
       //console.log(studentDetails.course);
       console.log(this.address);
    },
    goal : function(){
        console.log("To get placed in higher package");
        console.log(this.name);
    },
    // details(){

    // },
    // status(){
    //     this.details();
    // }

}

console.log(studentDetails.name);
console.log(studentDetails.course);
console.log(studentDetails.address);
console.log(studentDetails.skills[1]);
// studentDetails.goal();
// studentDetails.data();

console.log(studentDetails);
//Update Syntax
//ObjName.key=newvalue
studentDetails.address="Porur";
console.log(studentDetails.address);

//Add
//ObjName.newKey=newValue
studentDetails.gender="Female";
console.log(studentDetails.gender);
console.log(studentDetails);

//delete
//delete ObjName.key
delete studentDetails.gender;
console.log(studentDetails);

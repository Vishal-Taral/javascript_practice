// let student = {
//     name: 'aashish',
//     city : 'mumbai',
//     age :"30"
// }
// console.log(student);
// function getStudentData(get) {
//   return student[get];
// }
//   console.log(getStudentData('name'));
//   console.log(getStudentData('city'));
//   console.log(getStudentData('age'));
 


//   let obj = [
//     {
//     "firstName" :"vishal",
//     "LastName":"taral",
//     "age" : '23'
//     },
    
//     {
//         "at" : "kauli",
//         "tal":"soygson",
//     },
    
//     // getvalue : function(){
//     //     return this.firstName+" "+this.lastName
//     // }
//   ];
//   obj.firstName=obj[0];
//   obj.adress=obj[1];
//   console.log(Object.values);

//   class Person {
//     constructor(name) {
//         this.setName(name);
//     }
//     getName() {
//         return this.name;
//     }
//     setName(newName) {
//         newName = newName.trim();
//         if (newName === '') {
//             throw 'The name cannot be empty';
//         }
//         this.name = newName;
//     }
// }

// let person = new Person('Jane Doe');
// console.log(person); // Jane Doe

// person.setName('            vishal taral ');
// console.log(person.getName()); // Jane Smith
// let shubhangi = {
//     name : "shubs",
//     city : "jalgaon",
//     college : "IMR",
//     behavior:{
//         "behave Like":"cool",
//         otherwise : "chidchidi"
//     }
// }

// let clone = {};

// for (let element in shubhangi){
//     clone[element] = shubhangi[element];
// }

// let vishal = {
//     nameis:"rahul",
//     cityis:"sambhaji nagar"
// }
// let atul = {
//         "isbhadkhau" :true,
//         "is Madarchod" : false,
// }
// Object.assign(clone, shubhangi, vishal, atul);

// console.log(clone.nameis +" "+ clone.isbhadkhau+" "+clone.name);

// let arr = ["vishal","shubhangi","bhagyashree","harshali","taral"];
// console.log(`${arr[1]} ${arr[0]} ${arr[4]}`);
// console.log(arr[1]+" "+arr[0]+" "+arr[4]);

// function ask(qustion, yes, no){
//     if(confirm(qustion)){
        
//     }
// }


if(null){
    console.log("ok");
}else{
    console.log("not ok");
}

let accessallowed;

function js(){
    let a = prompt("What is the 'official' name of javascript");
    if(a == "ECMAScript"){
        console.log("Right..MAScript!");
    }else{
        console.log("Wrong..!");
    }
}
js();

var a = 2;
var b = 5;
let result = (a+b<10)?'below':'over';
console.log(result);
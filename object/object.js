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
 


  let obj = [
    {
    "firstName" :"vishal",
    "LastName":"taral",
    "age" : '23'
    },
    
    {
        "at" : "kauli",
        "tal":"soygson",
    },
    
    // getvalue : function(){
    //     return this.firstName+" "+this.lastName
    // }
  ];
  obj.firstName=obj[0];
  obj.adress=obj[1];
  console.log(Object.values);

  class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('            vishal taral ');
console.log(person.getName()); // Jane Smith


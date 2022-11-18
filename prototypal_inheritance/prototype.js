let student = {
    name: "vishal",
    city: "Sambhaji nagar",
};
let teacher = {
    noun: "Milind",
    district: "jalgaon",

};
teacher.__proto__ = student;
console.log(teacher);

/************************ */

let user1 = {
    education: "msc",
    univercity: "NMU",
};
let user2 = {
    crime: "murder",
    __proto__: user1,
};
console.log(user2.education);

/************************ */

let animal = {
    // iswalk : true,
    walk() {
        if (!this.isSleeping) {
            // alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
        this.iswalk = 'abcd'
    },
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
// rabbit.sleep();
// console.log('before =>', animal);
// animal.sleep();
// console.log(rabbit.isSleeping); // true
// console.log('obj =>', animal);


const ab = function a(){
    console.log('a called');
}

let xyz = {
    name: 'ak',
    address: 'Pube',
     ab(){
        console.log("bhaii");
     }
}

xyz.ab();


let man = {
    jumps: null
  };
  let tiger = {
    __proto__: man,
    jumps: true
  };
  
  console.log( tiger.jumps ); // ? (1)
  delete tiger.jumps;
  console.log( tiger.jumps ); // ? (2)
  delete man.jumps;
  console.log( tiger.jumps ); // ? (3)

  let a ={
    name:"rahul"
  };
  let b = Object.keys(a).length;
  console.log(b);

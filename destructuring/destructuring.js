// we cant destructuring on array of object

const student = {
    name: 'Vishal',
    age: 25,
    city: 'Pune',
    address: {
      flat: 30,
      wing: 'A',
      state: 'MH',
      education: {
        university: 'Pune',
        year: '2006'
      }
    }
};

const {name, age: ageInYears, address:{ flat ,education:{university} } } = student;

console.log(`Name is ${name} and age is ${ageInYears} and flat is ${flat} and univercity is ${university}` );


const stud = {
    noun: 'Vishal',
    age: 25,
    city: 'Pune'
};

const noun = stud.noun;
const age = stud.age;

console.log(`Name is ${noun} and age is ${age}`);

//  Array destructuring
const cars = ['creta', 'swift', 'zen', 'xuv'];
const [car1,car2] = cars;
console.log(`available cars are ${car1} and ${car2}`);
let myName = "vishal";

console.log("developer " , ` ${myName}`);
console.log(`developer ,  ${myName}`);

alert( `the result is ${1 + 2}` );                               // the result is 3 
alert( "the result is ${1 + 2}" );                               //the result is ${1 + 2}

console.log(9007199254740991 + 1 + 3)
console.log(typeof(alert));

// boolean datatype

let isGrater = 6 > 7;
console.log(isGrater)

let a;  //here is not memory alloacated so reference error may be occurs here 
console.log(typeof(a));
a=null;  // here is memory allocated but value is ententianlly decalered empty so reference error will not occurs here  
console.log(typeof(a));

let array =["Amazon","Wipro",];
console.log("type of array is "+typeof array );
let object = {
    Amazon :"It's cloud Company",
    Wipro:"not Cloude Company"
}
console.log("type of object is also "+typeof object);
console.log(object.Amazon);
console.error("Something went wrong in this page ");

let aa = 10;
let b = 10;
console.log(aa === b);

 

console.log(false - true + "gjhgkgjg"); 
console.log(Number.NaN===NaN);
console.log(NaN===NaN);

let num = 0;
 while(num <= 10){
     console.log(num);
        num++;
 }


 console.log(null == undefined);
 console.log(typeof NaN); // typeof NaN is number    

 let message = "I\'m  also a valid string";
 console.log(message);

let str = "vishal bhai";
str = str+ " shubham";
console.log(str); // javascript string is immutable behind the scene js engine create a new string to hold new string and destroy the original string

"use strict"
let pageview = Boolean();
console.log(pageview);
console.log(typeof pageview);
console.log( pageview.valueOf());
console.log(pageview.toString() + "  to String method ");
console.log();

let ab = Boolean('');
console.log(ab);

let obj = new Boolean(1);
console.log(obj instanceof Object);

let age = 25;
let newAge = age;

newAge = newAge + 1;
console.log(age, newAge);

//An object assigned to a variable

let person = {
    name: 'John',
    age: 25,
  };
  
  let member = person;
  
  member.age = 26;
  
  console.log(person);
  console.log(member);
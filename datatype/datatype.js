let name = "vishal";

console.log("developer " , ` ${name}`);
console.log(`developer ,  ${name}`);

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

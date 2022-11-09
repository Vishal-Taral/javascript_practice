// // performing action on button of the website 
// var firstName = "vishal";
// function check() {
//     var firstName = "rahul";

//     let name = "hello" + " " + firstName;
//     console.log(name);

// }
// check(); //if we are performing task on a button of website then not need of function call

// let sum = function (a, b) {
//     return a + b;
// };

// sum(4, 5);
// console.log(sum);

// // function expression 

// let age = prompt("what is your age ?");
// let welcome;

// if (age < 18) {
//     welcome = function () {        // if we dont create an function expression then this function will not visible outside of the if 
//         alert("hello");           // so declare a global variable and asign the a function to that variable

//     };
// }
// else {
//     welcome = function () {
//         alert("greeting");
//     }
// }
// welcome();


// // or we can do this work using ternary operator because it provides feature of if - else condition

// // arrow function   

// let division = (a, b) => a / b
// console.log(division(2, 3));



// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "do you agree ?",
//     () => console.log(" you agreed "),
//     () => console.log("you canceled execution ..!")
// );

// // console.log("vishal"); console.log("rohan");     statememnts with delimited

// describe("pow", function () {

//     it("raises to n-th power", function () {
//         assert.equal(pow(2, 3), 8);
//     });

// });
// describe();  // Can't understand


// let now = new Date();
// console.log(now);

// let ages = [10, 20, 30, 5];
// console.log(ages + "<br><br>");

// let b = ages.filter(chechAdult)
// console.log(b);

// function chechAdult(age) {
//     return age >= 18;
//     //console.log(age);
// }

let addition = () => {
    let fd = 1640;
    let fd1 = 20;
    return fd - fd1;
}
console.log(addition());

// const pre = 2020;
// pre = 399;
//console.log(pre);

function mul(...numbers){
    let mul = 0;
    for (let num of numbers){
        mul = mul * num;
    }
    return mul;

}

console.log(mul(1,2,3,4,5,65));

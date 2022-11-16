// function sayhi(startingValue){
//     this.value = startingValue;
//     this.read = function(){
//         this.value= prompt("enter a value");
//     }
// }
// let sayhi = new accumulator()
// sayhi.read();
// console.log(sayhi.read);

"use strict"
let a = {
    name: "vishal",
    qualification : "bsc",
    sayhi(){
        let add  = 10 + 20;
        console.log(add);
        console.log(this);   // it refering to the window object
        console.log(this.name);
    }
};  
a.sayhi();

// arraow function have no this 
let 


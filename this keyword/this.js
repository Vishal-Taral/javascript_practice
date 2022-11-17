//function sayBi(startingValue){
//     this.value = startingValue;
//     this.read = function(){
//         this.value= prompt("enter a value");
//     }
// }
// sayBi('vishal');

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

let calculator = {
    sum() {
        return this . a + this .b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a');
        this.b = +prompt('b');
    }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

function user(name){
    this = {}; // implicitely add this

    // add property to this
    
}

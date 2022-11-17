//function sayBi(startingValue){
//     this.value = startingValue;
//     this.read = function(){
//         this.value= prompt("enter a value");
//     }
// }
// sayBi('vishal');

"use strict"

function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);

  
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

function BigUser(){
    this.name = "vishu";
    return
    
}
console.log(new BigUser().name);

function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
  let john = new User("vishal");
  
  john.sayHi(); // My name is: John

  //Constructor functions

  let obj = {};
  function A() {return obj;}
  function B() {return obj;}

  console.log( new A() == new B() );  // will return true 

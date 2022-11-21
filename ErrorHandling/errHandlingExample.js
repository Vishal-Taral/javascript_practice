"use strict"
// function tryErrHandle() {
//     try {
//         a;
//     }
//     catch {
//         console.log("there is an error");
//     }
// }

// tryErrHandle();

// function tryErrHandle1(a, b) {
//     try {
//         c = a / b;
//         console.log(c);

//     } catch {
//         console.log("Any no. will not divide by zero");
//     }
// }
// tryErrHandle1(20, 0);

// let a, b, c;
// a = 10;
// b = 20;
// c = 0;
// function caluculate() {
//     c = a + b;
//     console.log(c);
// }
// caluculate();


let json = '{"name": " vishal","age": "23"}';
try {
    let client = JSON.parse(json);
    console.log(`${client.name}'s age is ${client.age} <br> ` );
} catch (err) {
    //console.log("sorry your data can't fetch ");
    let a = console.logln(err.name + "<br>");
    console.logln(err.message + "<br>");
} finally {
    console.log("all set please don't embarrase");
}

// let error = new Error("things so wrong ...!");
// console.log(error.name);   //  Error 
// console.log(error.message);   // things so wrong ...! 

/******************************** */
let json2 = '{ "age": 30 }'; // incomplete data
try {

    let user = JSON.parse(json2);

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }

    blabla(); // unexpected error
    console.log(user.name);
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log("JSON Error: " + err.message);
    } else {
        throw err; // rethrow (*)
    }

}

/******************************* */

// let num = +prompt("Enter a positive integer number?", 35)

// let diff, result;

// function fib(n) {
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error("Must not be negative, and also an integer.");
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//   result = fib(num);
// } catch (err) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }

// console.log(result || "error occurred");

// console.log( `execution took ${diff}ms` );

/******************* */

// function f() {
//     try {
//       console.log('start');
//       return "result";
//     } catch (err) {
//       console.log("handle the error")
//     } finally {
//       console.log('cleanup!');
//     }
//   }
  
//   f();
/***************     Custom Errors   ************ */

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.name = "PropertyRequiredError";
      this.property = property;
    }
  }
  
  // Usage
  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
  
    return user;
  }
  
  // Working example with try..catch
  
  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No property: name
      alert(err.name); // PropertyRequiredError
      alert(err.property); // name
    } else if (err instanceof SyntaxError) {
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // unknown error, rethrow it
    }
  }


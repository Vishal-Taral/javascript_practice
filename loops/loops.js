let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}


//use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

//these calls have different this
//"this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

function makeUser() {
    return {
      name: "John",
      ref : this
    };
  }
  
  // let user = makeUser();
  
  // alert( user.name); // What's the result?

  // for (let a = 0; a <= 6; a++) 
  // {
  //   for (let b = 0; b <= b; b++) {
  //     console.log(b+ ' ');
      
  //   }
  //   console.log(" <br> ");
    
  // }

//   let array = ["vishal","rohan","vishal..No"]
//   let obj = {
//     name : "vishal",
//     age : 22
//   }

//  for (const props in obj) {
//       console.log(props[obj]);
//  }

//   for (const element in array) {
//     console.log(element + "   For in loop" );
//     console.log();
//   }                                                 //For in loop returns the index of array element
  // for (let elements of array) {
  //   console.log(elements + "  For of loop");
  // }                                                 //For in loop returns the elements of array element
  
  let i = ["vishal","patil","kawli"];
  while(i <= 4 ) {
    i++;
    console.log(i );
    
  }
 
  
  

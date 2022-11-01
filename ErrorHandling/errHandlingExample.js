function tryErrHandle() {
    try {
        a;
    }
    catch {
        console.log("there is an error");
    }
}

tryErrHandle();

//

//  function tryErrHandle1(a,b) {
//     try{
//         c = a / b;
//         console.log(c);
   
//     }catch{
//         console.log("Any no. will not divide by zero");
//     } 
// }
// tryErrHandle1(20, 0);
"use strict"
let a , b , c;
a= 10;
b= 20;
c=0;
function caluculate() {
    c = a+b;
    console.log(c);
}
caluculate();


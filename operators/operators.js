// let a = 102 , b = 2 , c = null;
// console.log(a);
// a = -a;                            //Here -(minus) is unary operator because it has only one operand
// console.log(a , "Here -(minus) is unary operator because it has only one operand");

// c = a+b;
// console.log(c);   // -102+2 = -100    it's binary operator 
// console.log(a**b , "exponentiation (squre)"); // exponentiation (squre)
// console.log(a/b);   // returns division
// console.log(a%b);    // returns reminder 

// // concantination

// let wordsJoind = "developer "+"vishal";
// console.log(wordsJoind);

// console.log(2 + '3');
// console.log('3'+ 2);

// console.log(3 + 4 + '2');
// console.log('3'+ 2 + 5);

// //squre root and cube root 

// console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// console.log( 125 ** (1/3) );  // cube root 
// console.log( 32 ** (1/4) );  // 4th root 

// /************************************************************ */

let rahul = 81;
let sachin = 32;

console.log(+rahul + +sachin); // it addind two variables not cancantinate because + sign is attaches each variable name 


// // chaining assignment . It's very interesting feture of javascript 
// let aa,bb,cc;
// aa=bb=cc=2+2;
// console.log(aa,bb,cc);

// // Increment Operator

// let incre = 2;
// incre++;
// ++incre;
// alert(incre);

// let counter = 0;
// counter++;
// ++counter;
// alert( counter );

// let year =prompt("enter the year");
// if (year % 4 == 0)
// {
//     console.log("its Leap year");
// }
// else{
//     console.log("not leap year"+);
// }

// let years  = prompt("enter any age")
// let isleap = (years % 4 == 0) ? true : false ;
// console.log(isleap);
// alert(5&&7)
// alert(null || 0 || 1)

let user = "ankush";

//  alert(user ?? "Anonymous");

let firstName = "vishal";
let lastName = 1;
let nickName = "Supercoder";

// shows the first truthy value:
// alert(firstName || lastName || nickName || "Anonymous");
// alert(firstName ?? lastName ?? nickName ?? "Anonymous");
 
const name = "vishal";

console.log('My name is ' +name);


// Conditionak operators

let sum =(marathi , english , hindi)=>
{
    let addition = marathi+ english + hindi;
    return addition;
}
let per = (newtotal)=>{
    var percentage = (newtotal/300)*100;
    console.log('percentage is==>',percentage);
}
var ttt = sum(80,80,80);
console.log('addition is==>',ttt)
per(ttt)



for(i = 0; i<= 100; i++)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
}

let object1 = {
    
    name:"parrot"
    // "likes bird" : true
}
object1["likes bird"]= true;

console.log(object1["likes bird"]);

/******************************** number convergion of an object  ********************************/ 

let obj2={
    count : "2",
    Number(){
        return +this.count;
    }
}

const abc = "12";
const c = Number(abc);
console.log('sab =>', typeof(obj2.Number()));

let num = 3.2555;

alert( Math.round(num * 100) / 100 );


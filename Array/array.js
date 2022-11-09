//  let arr = ['vishal', 'rahul', 'sachin'];
//  console.log(arr);
//  console.log(arr.length); //to count length of an array length property is availabel in js 

 
//  console.log(fruits.at(-1));  // its a shorter syntax provided by javascript to fetch the last element of an array
//  let fruits = ["Apple", "papaya", "jujub", "mango"];
//  fruits.length = 3;
//  console.log(fruits.length);
//  console.log(fruits);
//  console.log(typeof fruits + "   type of array") ;
//  fruits.unshift('pineapple');
//  alert( fruits.length );
//  for (let i = 0; i < fruits.length; i++) {
//    alert( fruits[i] );
//  }
//  let array = ['vishal', 'mangesh', 'rohan', 'samruddhi', 'ganesh', 'jitendra'];
 //delete (array[1]);
//  console.log(typeof array[1]);
//  console.log(array);  // we delete the element from array but its length still of 3
//  console.log(array.splice(3));
//  console.log(array);
//  console.log(array.slice(3));
//  console.log(array);
//  let object = {
//      name: "vishal",
//      age: 24,
//      position: 'webdeveloper',

//  }
//  for (const names of object) {
//      console.log(`${index} : ${item} : ${object}`);
//  }

/* let marks = new Array(10);
marks[0]= "rahul";
marks[1]= "rohan";
marks[2]= "atharav";
marks[3]= "rushikesh";
marks[4]= "akshay";
 */
// marks.push('vishal');
// console.log(marks);


// console.log(marks.includes(8));
// console.log(marks.indexOf(4,4));


// function checkMarks(mark){
//     let array = [];
//     for (let index = 0; index < marks.length; index++) {
        
//         if(marks[index]>=15){
//             array.push(marks[index])
//         }
//     }
//     return console.log(array);
// }

// checkMarks(marks)

// console.log(marks.find(checkMarks));
// function checkMarks(mark){
//     if(mark >= 15){
//         return mark;
//     }
       
// }
// function increment(marks){
//     let array =[];
//     marks.forEach((item)=>{
//         console.log(item++); 
//     })
// }
// increment();

var marks = [11,13,18,19,30,9,54,22,90,4];
marks.shift( );
marks.unshift(7);
marks.pop( );
marks.push(5);

console.log(marks);
// marks.forEach(myFunction);

// function myFunction(item) {
 
//   console.log(++item); ///// 11++  === 11
  
//   console.log("after adding 1 in item item is increase by 1 "+ item)
//   return console.log(item);
// }
// function compare(a, b) {
//     if (a > b) return 1; // if the first value is greater than the second
//     if (a == b) return 0; // if values are equal
//     if (a < b) return -1; // if the first value is less than the second
//   }
// console.log(marks.sort(compare));
// marks.reverse();
// console.log(marks); // 

// function reducer(preValue,CurrentValue){
//   const returns = preValue + CurrentValue;
//   console.log(`${preValue} : ${CurrentValue}`);
//   return returns

// }
// console.log(marks.reduce(reducer));


let obj2={
  name : "rushikesh",
  city : "pune",
  
  education:{
      college:"bla bla bla",
      field : "mechanical",
  }
}
// let obj4 = obj2;
// obj4.name= "vishal";
// console.log(obj4);


// let obj3 = JSON.parse(JSON.stringify(obj2))

// obj3.education.college="khattarnak college";
// console.log(obj3);
// console.log(obj2);
console.log(Object.keys(obj2),Object.values(obj2) );

let str = "Vishal Taral";

console.log(str.split(""));
console.log(str.from);

/* in javascript multidimentional array is not directly provided we use either array literal 
or one more array coping in a single variable that works as a multidimentional array exaples 
are following */

let arr1 =[1,2,3,4];
let arr2 =[5,6,7,8];
let arr3 =["vishal", "patil"];

let wholeArray = [arr1,arr2,arr3];
console.log(wholeArray);
console.log(wholeArray[2][1]);



let arr = ['vishal','rahul','sachin'];
console.log(arr);
console.log(arr.length);

// let fruits = ["Apple", "Orange", "Plum","mango"];

// console.log( fruits[fruits.length-1] ); 
// console.log(fruits.at(-1));  // its a shorter syntax provided by javascript to fetch the last element of an array


let fruits = ["Apple","papaya","jujub","mango"];

fruits.length = 3;
console.log(fruits.length);
console.log(fruits);
// fruits.unshift('pineapple');
// alert( fruits.length );



// for (let i = 0; i < fruits.length; i++) {
//   alert( fruits[i] );
// }

let array = ['vishal','mangesh','rohan','samruddhi','ganesh','jitendra'];
delete(array[1]);
console.log(typeof array[1]);
console.log(array);  // we delete the element from array but its length still of 3
console.log(array.splice(1,4));
console.log(array.slice(1,4));

let object = {
    name: "vishal",
    age: 24,
    position: 'webdeveloper',

}
for (const names of object) {
    console.log(`${index} : ${item} ${object}`);
    
}




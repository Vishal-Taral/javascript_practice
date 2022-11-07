// var convergion1 = 1234;
//  console.log(typeof convergion1);

//  //String convergion
//  convergion1 = String(convergion1);
//  console.log(typeof convergion1);

//  var convergion2 = true;

//  //convergion boolean to number 

//  convergion2 = Number(convergion2);
//  console.log(convergion2);   // 1 if true and 0 if false 

let str = "true";
console.log(typeof str);

str = Number(str);
console.log(typeof str);

console.log(1 + 2 + '1' + 1 + 2);
console.log(+true);

let a = 2;
a = a + 4;
a = a * 2;
a = a / 3;
console.log(a);

function fullName(fname, lname = "taral") {
    fname = '**' + fname + '**';
    lname = lname + " **";
    console.log(`the great person in the world ${fname} ${lname} `);

}
fullName("vishal", "patil");

function vishal(from, text) {
    if (text === null || text === undefined) {
        text = "text is not defined";
    }
    console.log(`${from}:${text}`);

}
vishal("shubhangi");

let obj = {
    name : "vishal" ,
    city : "sambhaji nagar ",
    "is from":"sambhaji nagar "
};

let clone ={};
for(let key in obj){
    clone[key]=obj[key];
}
clone.name = "rahul";
clone.city='jalgaon';
clone.surname = "taral";
clone["is from"] = "bhusawal";

let aaa = new Number(21);
console.log(typeof aaa);

let strname = "vishal 😂 taral";
for(let char of strname){
    console.log(char);
}

outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j == 4) {
        continue;
      }
      console.log(i, j);
    }
  }

  
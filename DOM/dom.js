"use strict"
let a = document.getElementById('first');
let newDivInsideFirstDiv = document.createElement('div');
newDivInsideFirstDiv.id = "newOne";
newDivInsideFirstDiv.innerHTML = "CLICK HERE";
newDivInsideFirstDiv.style = "color:white; background-color: darkcyan; height:50px; width:300px; display:flex; align-items: center;justify-content: center; border:2px solid black;border-radius:5px; "
a.append(newDivInsideFirstDiv);


// Code to give and print input from user

newDivInsideFirstDiv.addEventListener(`click`, printSomething);

let arr = [];
function printSomething() {
    arr.push(prompt("write Something"));

    let list = document.getElementById('second');
    arr.forEach(() => {
        let li = document.createElement("li");
        li.innerText = (arr);
        li.style="background-color: darkseagreen; width: 200px; margin-top:0.5rem"
        list.appendChild(li);
    });
    arr.pop();
}
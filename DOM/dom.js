"use strict"
let a = document.getElementById('first');
let newDivInsideFirstDiv = document.createElement('div');
newDivInsideFirstDiv.id = "newOne";
newDivInsideFirstDiv.innerHTML = "CLICK HERE";
newDivInsideFirstDiv.style = "color:white; background-color: darkcyan; height:50px; width:300px; display:flex; align-items: center;justify-content: center; border:2px solid black; border-radius:5px; "
a.append(newDivInsideFirstDiv);

newDivInsideFirstDiv.addEventListener(`click`, printSomething);
let arr = [];

//function to give input from dialogue box and print 
function printSomething() {
    let a = prompt("write Something");
        
    if(a === ""){
        let massage = document.createElement("li");
        massage.id = "msg";
        massage = document.getElementById('second').innerHTML="please enter your name...";
        
    }else {
    
        arr.push(a);
    }


    
    let list = document.getElementById('second');
    arr.forEach(() => {
        let li = document.createElement("li");
        li.className = 'list-group';
        li.innerText = (arr);
        li.style = "background-color: whitesmoke; width: 20%; margin-top:0.5rem; border:1px solid black; display:flex; justify-content: space-between; "
        list.appendChild(li);
        arr.pop();

        //cross mark crated in following code 
        let a = document.createElement('a');
        a.id = 'cross';
        a.textContent = 'x';
        a.style = " background-color: aqua; width:20px; text-align:center; border-left:1px solid";
        a.addEventListener('click', removeChild);
        li.appendChild(a);

    });

    //function to remove child on click on cross mark

    document.getElementById('search-box').addEventListener('input', filterList)



    function removeChild(e) {
        let li = e.target.parentNode;
        list.removeChild(li);
    }

    //code to seraching 

    document.querySelector('#search-input').addEventListener('input', filterList);

    
    function filterList() {
        const serachInput = document.querySelector('#search-input');
        const filter = serachInput.value.toLowerCase();
        const listItems = document.querySelectorAll('.list-group');

        listItems.forEach((item => {
            let text = item.textContent;
            if (text.toLowerCase().includes(filter.toLowerCase())) {
                item.style.display = '';
                // li.style = "background-color: whitesmoke; width: 20%; margin-top:0.5rem; border:1px solid black; display:flex; justify-content: space-between; ";
                item.style = "backg;round-color: whitesmoke; width: 20%; margin-top:0.5rem; border:1px solid black; display:flex; justify-content: space-between;";
            } else {
                item.style.display = 'none';
            }
        }));
    }
}


// code for prompt 

let age = prompt('How old are you?'); // prompt accepts two parameter but if we not supply 2nd parameter then exlorer internally insert the "undefined" text 
if(age > 18)
{
    alert("you can vote..! ");
}
else{
    alert("you can't vote :-(  go and play on ground :-)")
}

// code for confirm

let isChildren = confirm("are you 18 year old");
console.log(isChildren);   // true     It confirms something 

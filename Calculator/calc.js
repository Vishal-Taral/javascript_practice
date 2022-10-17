// var numOne, numTwo,numThree,numFour,res,result
// function addition(){
//   numOne = parseInt(document.getElementById("fno").value);
//   numTwo = parseInt(document.getElementById("sno").value);
//   if(numOne && numTwo)
//   {
//     temp = document.getElementById("res");
//     temp.style.display = "block";
//     res = numOne + numTwo;
//     document.getElementById("add").value = res;


//   }
// }
// function substraction(){
//     numThree = parseInt(document.getElementById("fno").value);
//     numFour = parseInt(document.getElementById("sno").value);
//   if(numThree && numFour)
//   {
//     temp1 = document.getElementById(result);
//     temp1.style.display = "block";
//     result = numOne - numTwo;
//     document.getElementById("multiply").value = result;
//   }
// }

var numOne, numTwo, res, temp;
function fun() {
  numOne = parseInt(document.getElementById("one").value);
  numTwo = parseInt(document.getElementById("two").value);
  if (numOne && numTwo) {
    temp = document.getElementById("res");
    temp.style.display = "block";
    res = numOne + numTwo;
    document.getElementById("add").value = res;
    res = numOne - numTwo;
    document.getElementById("subtract").value = res;
    res = numOne * numTwo;
    document.getElementById("multiply").value = res;
    res = numOne / numTwo;
    document.getElementById("divide").value = res;
  }
}
let vishal = setInterval(() => console.log('ok'), 2000);
setTimeout(() => {
  clearInterval(vishal),console.log('done');
}, 5000);

let userDetail = {
    name:"vishal",
    age : 24,
    designation:"Software developer",
    
}
 let printDetail = function(){
    console.log('right');
   // console.log(this);
    
}
printDetail();
console.log(userDetail);
let student = {
    name: 'aashish',
    city : 'mumbai',
    age :"30"
}
console.log(student);
function getStudentData(get) {
  return student[get];
}
  console.log(getStudentData('name'));
  console.log(getStudentData('city'));
  console.log(getStudentData('age'));

 